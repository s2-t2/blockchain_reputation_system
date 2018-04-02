pragma solidity ^0.4.0;

contract Endorsement { 

	struct Endorsee {
		string name;
		uint trustScore;
		uint nER;
		uint nEG;
		//uint trustScore;
		// endorse id only or subset of info ??
	}
	struct Endorser {
		string name;
		uint nEG; 
		uint nER;
		uint trustScore;
	}
	
	address public owner;
//	address public endorser;
//	address public endorsee;
	//address public arbiter; //maybe an insurer in the middle??
	mapping (address => Endorser) public endorsers;
	Endorsee[] public endorsees;

	//mapping (address => uint) public edsValues;
	//mapping (address => uint) public ei;

	//uint public TOTAL = 3000000000000000000;  
	uint public nEG = 0;
	uint public iep = 10000000000000;

	modifier endorserOnly() { 
		require(msg.sender = endorsers);
		_;
	}

	modifier endorseeOnly() {
		require(msg.sender = endorsee);
		_;
	}
	
	//event to notify when transfer is complete
	event Delivered(address from, address to, uint amount);

	function Endorsement (string _name, string name1, string name2 ) {
		owner = msg.sender;
		name = _name

		endorsees.pushE(Endorsee({name: name1, nER:0 } ));
		endorsees.pushE(Endorsee({name: name2, nER:0 } ));

	}

	//function authorize to eliminate given endorsement 
	//in future if someone doesn't want to trust anymore
	function authorize() { 
		require(msg.sender == endorser);
		nEG[msg.sender] = 1;
		impact[msg.sender] = impact //formula of impact can be used  again here.
	}



	function create() payable {
		require(msg.value > 0 && msg.value % TOTAL == 0);
		edsValues[receiver] += (msg.value / TOTAL);
	}

	function endorse(address receiver)  { 
//		require(msg.value > 0) 
//		edsValues[msg.sender] += 
		
		if (msg.sender != endorser) return;
		//keep track of sender address from where eds is given to have no of connection
		nEG = nEG + 1;
//		edsValues[receiver]	+= 1/nEG;
		ei[receiver] += (nEG/250) * edsValues[receiver];
		//nEG/250 * Rp  * min(G,R)/max(G,R)
	}


	//function to store all the endorsers for a given participant. 
	//ex: A,B,C,D endorses E 
	//for (i=0; i < endorser.length; i++)
	//endorsers = endorser[i].name, endorser[i].nER to compute the impact

	function transfer(address receiver, uint amount) {
		if (edsValues[msg.sender] < amount) return;
		edsValues[msg.sender] -= amount;
		edsValues[receiver] += amount;
		Delivered(msg.sender, receiver, amount);
	}
		
}
