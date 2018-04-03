pragma solidity ^0.4.18;

import "./EDSToken.sol";

contract Endorsement is EDSToken {

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

	struct Trust { 
		address user;
		uint usedPower;
		uint impact;
		uint totalImpact;
	}

	//state variables
	address endorsee;
	string name;
	uint edsRecieved;

	//storage variables
	Trust [] public trust;

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
		//EDSToken( );
		owner = msg.sender;
		myToken(2100000000, "EDS", "%" );

	}


	//deactivate the contract
	function kill() public onlyOwner { 
		selfdestruct(owner);
	}

	//EDSToken (2100000, "EDS", "%" );


	// send endorsement
	function sendEndorsement(address _endorsee, string _name) public { 
		//cannot self endorse
		require (msg.sender != _endorsee );
		
		endorsee = _endorsee;
		name = _name;
		nEG[ msg.sender ] = nEG[ msg.sender ] + 1 ;
		endorsers[msg.sender ] = Endorser({
			endorsee: endorsee,
			nameEndorsee: name
			//nER: 
		});

		//EDSTransfer ( msg.sender, 100 );
		nER[endorsee ] = nER[endorsee ] + 1;

	}

	//compute trust score
	function computeTrust ( address _user ) { 


	}

	

}
























