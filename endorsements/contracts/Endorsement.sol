pragma solidity ^0.4.18;

import "./EDSToken.sol";

contract Endorsement is EDSToken {

	//owner
	address owner;

	struct Endorser { 
		//uint id;
		address endorsee;
		string nameEndorsee;
	//	uint [] givenTo;
	}

	struct Endorsee { 
		//uint id;
		//string nameEndorser;
		address endorser;
	//	uint [] receivedFrom;

	}

	struct Trust { 
		address user;
		uint ratio;
		uint usedPower;
		uint receivedEDS;
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

	struct TrackConnection { 
		address givenTo;
		address receivedFrom;
	}

	TrackConnection [] public connections; 

//	mapping (address => trackConnection ) To;
//	mapping (address => receivedFrom[] ) From; 


	// send endorsement
	function sendEndorsement(address _endorsee, string _name) public payable { 
		//cannot self endorse
		require (msg.sender != _endorsee );
		
		endorsee = _endorsee;
		address endorser = msg.sender;
		name = _name;
		nEG[ msg.sender ] = nEG[ msg.sender ] + 1 ;

		endorsers[msg.sender ] = Endorser({
			endorsee: endorsee,
			nameEndorsee: name
		});

		nER[ _endorsee] = nER[ _endorsee] + 1;

		TrackConnection memory newConnections = TrackConnection({
			givenTo: endorsee,
			receivedFrom: endorser 
		});

		connections.push(newConnections );
	}

	function ReceivedEDS ( address _user) public returns (uint _RE ) {
		//for i in list  of endorsees of user, 
		//get the used power of each of them and add all together.


	}
	
	//some helper functions for calculations

	function Division( uint _numerator, uint _denominator, uint _precision) public constant returns (uint _quotient) {
		uint numerator = _numerator * 10 ** (_precision + 1);
		uint quotient = ((numerator / _denominator) + 5  ) / 10;

		return (quotient);		
	}

	function max (uint x, uint y ) public constant returns (uint) {
		if (x < y) {
			return y;
		} else  {  
			return x;
		}
	}

	function min (uint x, uint y ) public constant returns (uint) { 
		if (x < y) { 
			return x;
		} else {
			return y;
		}
	}

	//compute trust score
	//supports decimal upto 9 place
	//can convert to decimal by dividing all values with 1e9 and get the exact score on 
	//client side
	function computeTrust ( address _user ) { 
//		user = _user;
//		ratio = Division( ( nEG[  _user] ), ( nER[ _user ] ), 9 );
//		usedPower = Division(1, (nEG[_user ]), 9 );
//		receivedEDS = ReceivedEDS( _user );
	//	totalImpact = ratio + up + RE;  

	}

}
























