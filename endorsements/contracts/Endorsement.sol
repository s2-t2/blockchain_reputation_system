pragma solidity ^0.4.18;

contract Endorsement {

	//owner
	address owner;

	struct Endorser { 
		//uint id;
		address endorsee;
		string nameEndorsee;
		//uint nER;
//		uint nEG;
//		uint nER;
	}

	struct Endorsee { 
		uint id;
		string nameEndorser;
		address endorsee;
		address endorsers;
//		uint nEG;
//		uint nER;
	}

	//state variables
	address endorsee;
	string name;
	uint impact;
	uint totalImpact;
	uint edsRecieved;

	mapping (address => Endorser ) public endorsers;

	mapping (address => Endorsee ) public endorsees;

	mapping (address => uint ) public nEG; //no. of eds given by a specific id
	mapping (address => uint ) public nER; //no. of eds received
	mapping (address => uint ) public trustScore; // total impact

	// modifiers
	modifier onlyOwner( ) { 
		require(msg.sender == owner );
		_;
	}

	//constructor
	function Endorsement() public { 
		owner = msg.sender;
	}

	//deactivate the contract
	function kill() public onlyOwner { 
		selfdestruct(owner);
	}


	// send endorsement
	function sendEndorsement(address _endorsee, string _name) { 
		endorsee = _endorsee;
		name = _name;
		nEG[ msg.sender ] = nEG[ msg.sender ] + 1 ;
		endorsers[msg.sender ] = Endorser({
			endorsee: endorsee,
			nameEndorsee: name
			//nER: 
		});

		nER[endorsee ] = nER[endorsee ] + 1;



	}
}























