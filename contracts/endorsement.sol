pragma solidity ^0.4.0;

contract Endorsement { 
	address public endorser;
	mapping (address => uint) public edsValues;

	//event to notify when transfer is complete
	event Delivered(address from, address to, uint amount);

	function Endorsement() {
		endorser = msg.sender;
	}

	function create(address receiver, uint amount) { 
		if (msg.sender != endorser) return;
		edsValues[receiver]	+= amount;
	}

	function transfer(address receiver, uint amount) {
		if (edsValues[msg.sender] < amount) return;
		edsValues[msg.sender] -= amount;
		edsValues[receiver] += amount;
		Delivered(msg.sender, receiver, amount);
	}
		
}
