pragma solidity ^0.4.18;

contract Endorsement {

	address owner;
    
    struct Participant { 
        address identifier;
        string name;
    }
    
    struct Endorser {
        address sender;
        uint nEG;
        uint usedPower;
        address[] givenTo;
        mapping(address => bool) hasGivenTo;
    }

	struct Endorsee { 
		address receiver;
		uint nER;
		//uint receivedPoints;
		address[] receivedFrom;
		mapping(address => bool) hasReceivedFrom;
	}
    
    Participant [] public participants;
    
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

	function joinNetwork(string _userName) public{
	    require(!joined[msg.sender]);
	    joined[msg.sender] = true;
	    
	    Participant memory newParticipant = Participant({
	        identifier: msg.sender,
	        name: _userName
	    });
	    participants.push(newParticipant);
	}
	
	function endorse(uint _index) public { 
	    address receiver = participants[_index].identifier;
	    
	    require(receiver != 0x0);
	    require(receiver != msg.sender);
		require(joined[msg.sender]);
	    
	    
	    Endorser storage endorser = endorsers[msg.sender];
	    
	    endorser.sender = msg.sender;
	    endorser.nEG++;
	    endorser.usedPower =Division(1,endorser.nEG, 9);
	    endorser.givenTo.push(receiver);
	    endorser.hasGivenTo[receiver] = true;
	    
	    endorserAccts.push(msg.sender) - 1;

		updateEndorsee(receiver, msg.sender);
	    
	}

	function updateEndorsee(address _receiver, address _sender) internal { 
		Endorsee storage endorsee = endorsees[_receiver];
		endorsee.receiver = _receiver;
		endorsee.nER++;
		endorsee.receivedFrom.push(_sender);
		endorsee.hasReceivedFrom[_sender] = true;

		endorseeAccts.push(_receiver) - 1;
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

		uint minVal = min(nEG,nER);
		uint maxVal = max(nEG,nER);

		uint ratio = Division(minVal, maxVal,9);
		uint usedUpByParticipant = endorsers[_participant].usedPower;
		uint RE = _RE; 

		uint impact = ratio * usedUpByParticipant * RE;

		return impact;

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

























