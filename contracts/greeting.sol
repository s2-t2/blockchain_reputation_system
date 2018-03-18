pragma solidity ^0.4.0;

contract mortal { 
	address owner;
	string greeting;

	function mortal (string _greeting) {
		greeting = _greeting;
		owner = msg.sender;
	}

	//returns the current greeting
	function greet() constant returns (string) { 
		return greeting;
	}

	//change the current greeting
	function setGreeting(string _greeting) { 
		greeting = _greeting;
	}

}
