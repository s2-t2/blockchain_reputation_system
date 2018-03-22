pragma solidity ^0.4.0

contract EndorsementToken { 
	//array with all the balances
	mapping (address => uint256) public balanceOf;

//	address public creator;
//	mapping (address => uint ) public balance;

	//event when transfer is complete
	event Transfer(address indexed from, address indexed to, uint amount);

	
	//Initial supply token to creator of contract
	function EndorsementToken( uint256 initialSupply, string tokenName, uint8 decimalUnits) {
		balanceOf[msg.sender] = initialSupply;
		name = tokenName;
		decimals = decimalUnits;

	}

	//Send coins
	function transfer(address _to, uint256 _value) { 
		require (balanceOf[msg.sender] >= _value );
		require (balanceOf[_to] + _value >= balanceOf[_to]);
		balanceOf[msg.sender] -= _value;
		balanceOf[_to] += _value;
		Transfer(msg.sender, _to, _value);
	}
}
