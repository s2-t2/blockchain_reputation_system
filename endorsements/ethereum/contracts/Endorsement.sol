pragma solidity ^0.4.18;

contract Endorsement {

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
		//uint receivedPoints;
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


	//mapping (address => uint) public receivedPoints;
    
	// modifiers
	modifier onlyOwner() { 
		require(msg.sender == owner );
		_;
	}

	//constructor
	function Endorsement() public { 
		//EDSToken( );
		owner = msg.sender;
	}

	event LogJoinNetwork(address _participant, string _name);  

	event LogEndorse(address _endorser, address _endorsee);

	address [] public allParticipants;

	function joinNetwork(string _userName) public{
	    require(!joined[msg.sender]);
	    joined[msg.sender] = true;

	    Participant memory newParticipant = Participant({
	        identifier: msg.sender,
	        name: _userName
	    });
	    participants.push(newParticipant);

		LogJoinNetwork(msg.sender, _userName);

		numberOfParticipants++;

		allParticipants.push(msg.sender);
	}

	function getAllParticipants() public view returns(address[]) {
		return allParticipants;
	}
	
	function endorse(uint _index) public { 
	    address receiver = participants[_index].identifier;
	    
	    require(receiver != 0x0);
	    require(receiver != msg.sender);
		require(joined[msg.sender]);
	    
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

		updateEndorsee(receiver, msg.sender);

		LogEndorse(msg.sender, receiver);
	    
	}

	function updateEndorsee(address _receiver, address _sender) internal { 
		Endorsee storage endorsee = endorsees[_receiver];
		endorsee.receiver = _receiver;
		endorsee.index++;
		endorsee.nER++;
		endorsee.receivedFrom.push(_sender);
		endorsee.hasReceivedFrom[_sender] = true;

		endorseeAccts.push(_receiver) - 1;
	}

	function removeEndorsement(address _endorsee) public returns(uint) { 
		Endorser storage endorser = endorsers[msg.sender];
		Endorsee storage endorsee = endorsees[_endorsee];

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

	function computeReceivedPoints(address _endorsee) public view returns(uint) { 
		address [] memory receivedFrom = getReceivedFrom(_endorsee);

		uint receivedPoints;

		for (uint i=0; i<receivedFrom.length; i++) { 
			receivedPoints = receivedPoints + endorsers[receivedFrom[i]].usedPower;
		}

		return receivedPoints;
	}

	function computeImpact(address _participant) public view returns (uint) { 
		uint nEG = endorsers[_participant].nEG;
		uint nER = endorsees[_participant].nER;
		uint _RE = computeReceivedPoints(_participant);
		uint impact;

		if (nEG <=1 && nER <=1 ) { 
			impact = 0;
			//return impact and exit here
		} else { 

			uint minval = min(nEG,nER);
			uint maxval = max(nEG,nER);

			uint ratio = Division(minval, maxval,9);
			uint usedUpByParticipant = endorsers[_participant].usedPower;
			uint RE = _RE; 

			impact = ratio * usedUpByParticipant * RE;
		}
		return impact;
	}

	function getProfile(address _participant) public view returns (
		uint,uint, address[], uint, uint, address[] ) { 
		//get profile for specific address

//		uint endorsementImpact = computeImpact(_participant);
//		uint totalImpact = endorsementImpact * endorsers[_participant].nEG;
//
//		return totalImpact;

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

//	function getSummary() public view returns(uint, uint, uint, address[], uint, address[]) {
//		return (
//			endorsers.index,
//			endorsers.nEG,
//			endorsers.usedPower,
//			endorsers.givenTo,
//
//			endorsees.nER,
//			endorsees.receivedFrom
//		);
//	}
//
	function getCount( ) public view returns (uint) {
		return numberOfParticipants;
	}
	
	function getEndorsers() view public returns (address []) { 
	    return endorserAccts;
	}
	
	function getUsedPower(address _endorser) view public returns(uint) {
	    return (endorsers[_endorser].usedPower);
	    
	}
	
	function getGivenTo(address _endorser) view public returns(address []) {
	    return (endorsers[_endorser].givenTo);
	    
	}
	
	function gethasGivenTo(address _endorser, address _endorsee) view public returns(bool) {
	    return (endorsers[_endorser].hasGivenTo[_endorsee]);
	    
	}

	function getEndorsees() view public returns (address []) { 
	    return endorseeAccts;
	}
	
	function getReceivedFrom(address _endorsee) view public returns(address []) {
	    return (endorsees[_endorsee].receivedFrom);
	    
	}
	
	function gethasReceivedFrom(address _endorser, address _endorsee) view public returns(bool) {
	    return (endorsees[_endorsee].hasReceivedFrom[_endorser]);
	}

	
	//some helper  functions for calculations
	function Division( uint _numerator, uint _denominator, uint _precision) internal pure returns (uint _quotient) {
		uint numerator = _numerator * 10 ** (_precision + 1);
		uint quotient = ((numerator / _denominator) + 5  ) / 10;

		return (quotient);		
	}

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

























