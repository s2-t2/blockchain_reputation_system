pragma solidity ^0.4.18;

import "./Ownable.sol";
import "./Killable.sol";
import "./MarketPlace.sol";

contract Endorsement is Ownable, Killable, MarketPlace {

	address owner;
    
    struct Participant { 
        address identifier;
        string name;
    }
    
    struct Endorser {
		uint index;
        address sender;
        uint nEG;
        uint usedPower;
        address[] givenTo;
        mapping(address => bool) hasGivenTo;
    }

	struct Endorsee { 
		uint index;
		address receiver;
		uint nER;
	//	uint receivedPoints;
		address[] receivedFrom;
		mapping(address => bool) hasReceivedFrom;
	}
	Participant [] public participants;
	
	uint numberOfParticipants;
	mapping(address => bool) joined;
	mapping (address => Endorser) endorsers;
	address[] public endorserAccts;

	mapping (address => Endorsee ) endorsees;
	address[] public endorseeAccts;


	mapping (address => uint) public prevLength;
	mapping (address => uint) public receivedPoints;
    
	// modifiers
	// set owner of contract - replace eventually with Ownable contract
	modifier onlyOwner() { 
		require(msg.sender == owner );
		_;
	}

	//reject any ether transfer 
	modifier HasNoEther( ){ 
		require(msg.value == 0);
		_;
	}

	//constructor
	function Endorsement() public { 
		//EDSToken( );
		owner = msg.sender;
	}

	//event logs
	event LogJoinNetwork(
		address _participant, 
		string _name
	);  

	event LogEndorse(
		address _endorser, 
		address _endorsee
	);

	address [] public allParticipants;

	mapping (address => uint ) participantIndex;


	//Join Network as any user
	function joinNetwork(string _userName) public HasNoEther {

		//only allow unregistered participant
	    require(!joined[msg.sender]);

	    joined[msg.sender] = true;

		// store senders id and name
	    Participant memory newParticipant = Participant({
	        identifier: msg.sender,
	        name: _userName
	    });

		//add new participant to the existing list of joined members
		participants.push(newParticipant);
		numberOfParticipants++;
		participantIndex[msg.sender] = numberOfParticipants-1;

		LogJoinNetwork(msg.sender, _userName);

		allParticipants.push(msg.sender);
	}

	//get list of all participants
	function getAllParticipants() public view returns(address[]) {

		return allParticipants;
	}

	//get index of participant by address, helper function, view modifier 
	function getParticipantIndex(address _participant) public view returns (uint ) {

		uint userIndex = participantIndex[_participant];
		return userIndex;
	}

	//Profile-related changes of participants
	function getName(uint _index ) public view returns (string ) {

		string name = participants[_index].name;
		return name;
	}

	function editProfile(address _participant, 
						 string _name
						) public HasNoEther {

		//verify editor is same as profile owner
		require(msg.sender == _participant);

		//change state
		uint id = getParticipantIndex(_participant);
		participants[id].name = _name;
	}

	//send Endorsement - from  endorser to endorsee
	function endorse(uint _index) public HasNoEther { 

		// get address of endorsee
	    address receiver = participants[_index].identifier;

	    
		//verify endorser and endorsee are different and registered 
		require(joined[msg.sender]);
		require(receiver != 0x0);
		require(receiver != msg.sender);
	    
		//store and update new endorser information
		Endorser storage endorser = endorsers[msg.sender];

		endorser.index++;
		endorser.sender = msg.sender;
		endorser.nEG++;
		
//		if (endorser.nEG >1 ){ 
//			endorser.usedPower = Division(1, endorser.nEG,9);
//		} else {
//			endorser.usedPower = 0;
//		}
		
	    endorser.usedPower =Division(1,endorser.nEG, 9);
	    endorser.givenTo.push(receiver);
	    endorser.hasGivenTo[receiver] = true;
	    
	    endorserAccts.push(msg.sender) - 1;

		//trigger call for updating endorsee information
		updateEndorsee(receiver, msg.sender);

		//Log endorsement event
		LogEndorse(msg.sender, receiver);
	}

	//store and update new endorsee information after transaction call
	function updateEndorsee(address _receiver, 
							address _sender) internal { 

		Endorsee storage endorsee = endorsees[_receiver];
		endorsee.receiver = _receiver;
		endorsee.index++;
		endorsee.nER++;
	//	endorsee.receivedPoints = computeReceivedPoints(_receiver);
		endorsee.receivedFrom.push(_sender);
		endorsee.hasReceivedFrom[_sender] = true;

		endorseeAccts.push(_receiver) - 1;
	}

	//remove endorsement as an endorser of an endorsee
	function removeEndorsement(address _endorsee) public returns(uint) { 

		require (joined[_endorsee]);

		Endorser storage endorser = endorsers[msg.sender]; 
		Endorsee storage endorsee = endorsees[_endorsee]; 
		
		//proceed only if endorsee is in the endorser's list of endorsees
		if (endorser.hasGivenTo[_endorsee]) { 
			endorser.hasGivenTo[_endorsee] = false;
			endorser.nEG--;

			//remove endorsee from endorser.givenTo array 
			endorsee.hasReceivedFrom[msg.sender] = false;
			endorsee.nER--;

			//remove endorser address from endorsee.receivedFrom array
		}
		return endorsers[msg.sender].index;
	}

	//computation of total received points of an endorsee 
	function computeReceivedPoints(address _endorsee) public view returns(uint) { 

		require(joined[_endorsee]);

		//get list of endorsers addresses from whom _endorsee has received eds from
		address [] memory receivedFrom = getReceivedFrom(_endorsee);

		uint TRP = receivedPoints[_endorsee];
		uint len = prevLength[_endorsee]; 

		for (uint i=len; i< receivedFrom.length; i++){
			TRP = TRP + endorsers[receivedFrom[i]].usedPower;
		}
		receivedPoints[_endorsee] = TRP;
		prevLength[_endorsee] = receivedFrom.length;
		return TRP;


		//aggregate total received points from  the accumulated receivedFrom list
//		uint receivedPoints;
//
//		for (uint i=0; i<receivedFrom.length; i++) { 
//			receivedPoints = receivedPoints + endorsers[receivedFrom[i]].usedPower;
//		}
//
//		return receivedPoints;
	}

	//computation of total endorsement impact of a participant
	//the degree of connection should be strictly greater than 1 to be considered for 
	//impact computation, else, the impact by default should be ignorant, i.e., 0
	function computeImpact(address _participant) public view returns (uint) { 

		require (joined[_participant]);

		uint nEG = endorsers[_participant].nEG;
		uint nER = endorsees[_participant].nER;

		uint _RE = computeReceivedPoints(_participant);

		uint impact;
		uint totalImpact;

		if (nEG <=1 && nER <=1 ) {
			impact = 0;
			return impact;
			//return impact and exit here
		} else { 

			uint minval = min(nEG,nER);
			uint maxval = max(nEG,nER);

			uint ratio = Division(minval, maxval,9);
			uint usedUpByParticipant = endorsers[_participant].usedPower;
			uint RE = _RE; 

			impact = ratio * RE;
		}
		


		// call feedback function here
		totalImpact = transactionFeedBack(_participant, impact);
		return totalImpact;
	}

	//Receive feedback from Transaction Network and penalize the nodes
	function transactionFeedBack(address _participant, 
								 uint _impact ) 
								 public returns (uint) {

		if (flagCount[_participant] >= 1) {
			//Decrease the current impact by 50 %
			uint res = Division(_impact,2,9);
			uint penalty = _impact - res ; 

		} else {
			penalty = _impact;
		
		}

		return penalty;
	}

	//Single function to get all the details of a registered participant
	function getProfile(address _participant) public view returns (
		uint,
		uint, 
		address[], 
		uint, 
		uint, 
		address[] ) 
		{ 

		uint outDegree = endorsers[_participant].nEG;
		uint usedPower = endorsers[_participant].usedPower;
		address[] outConns  = endorsers[_participant].givenTo;
		
		uint inDegree =	 endorsees[_participant].nER;
		uint receivedPoints = computeReceivedPoints(_participant);
		address[] inConns   = endorsees[_participant].receivedFrom;

		return ( 
				outDegree, 
				usedPower,
				outConns,

				inDegree,
				receivedPoints,
				inConns
		);
	}

	//get connections and degree of connections - helper function
	function getConnections(address _participant) public view returns (
		address [],
		address []
	){

		require (joined[_participant]);

		address [] inConns = endorsees[_participant].receivedFrom;
		address [] outConns = endorsers[_participant].givenTo;

		return (inConns, outConns);
	}

	//count total number of registered participants
	function getCount( ) public view returns (uint) {

		return numberOfParticipants;

	}

	//return array of all endorser accounts
	function getEndorsers() view public returns (address []) { 

	    return endorserAccts;

	}

	//return the total consumable power used by an endorser
	function getUsedPower(address _endorser) view public returns(uint) {

	    return (endorsers[_endorser].usedPower);

	}

	//return list of addresses that an endorser has sent endorsement to 
	function getGivenTo(address _endorser) view public returns(address []) {
	    return (endorsers[_endorser].givenTo);
	}

	//return number of endorsees an endorser has sent endorsement to
	function getGivenToCount(address _endorser ) view public returns (uint) {
		return (endorsers[_endorser].givenTo).length;
	}
	
	//return a boolean value from the matrix of hasGivenTo, quick access for checking 
	//if an endorsee's address is in the list of endorsee addresses of the particular endorser.
	function gethasGivenTo(address _endorser, 
						   address _endorsee) view public returns(bool) {
	    return (endorsers[_endorser].hasGivenTo[_endorsee]);
	}

	//return an array of all endorsee accounts - front end
	function getEndorsees() view public returns (address []) { 
	    return endorseeAccts;
	}

	//return address of all the endorsers for an endorsee, helper function to 
	//compute total received point
	function getReceivedFrom(address _endorsee) view public returns(address []) {
	    return (endorsees[_endorsee].receivedFrom);
	}

	//count total number of endorser for an address of endorsee
	function getReceivedFromCount(address _endorsee) view public returns (uint ) {
		return (endorsees[_endorsee].receivedFrom).length;
	}

	//return a boolean value from the matrix of hasReceivedFrom, to check if 
	// an endorser's address is in the list of endorser address of the particular endorsee
	function gethasReceivedFrom(address _endorser, 
								address _endorsee) view public returns(bool) {
	    return (endorsees[_endorsee].hasReceivedFrom[_endorser]);
	}

	
	//some helper  functions for floating point calculation
	function Division( uint _numerator, 
					  uint _denominator, 
					  uint _precision) internal pure returns (uint _quotient) {

		uint numerator = _numerator * 10 ** (_precision + 1);
		uint quotient = ((numerator / _denominator) + 5  ) / 10;

		return (quotient);		
	}

	//some helper maths function to compute max, min value.
	//used for computing ratio and ensuring that the ratio is always less than 1.
	function max (uint x, uint y ) internal pure returns (uint) {
		if (x < y) {
			return y;
		} else  {  
			return x;
		}
	}

	function min (uint x, uint y ) internal pure returns (uint) { 
		if (x < y) { 
			return x;
		} else {
			return y;
		}
	}
}
