pragma solidity ^0.4.18;

contract EDSToken {  
	//public variables of token
	string public name;
	string public symbol;
	uint public decimals;

	uint public totalSupply;

	
	//Create array with all the balances
	mapping(address => uint256 )  public EDSBalance;

	//public event to notify clients
	event edstransfer (address indexed from, address indexed to, uint256 value );


	function myToken (uint256 initialSupply, string tokenName, string tokenSymbol ) public {
		decimals = 18;
		totalSupply = initialSupply * 10 ** uint256(decimals);
		EDSBalance[msg.sender] = totalSupply;
		name = tokenName;
		symbol = tokenSymbol;
	}


	function EDSTransfer ( address _to, uint256 _value  ) public {
		require (EDSBalance[msg.sender] >= _value);
		EDSBalance[msg.sender] -= _value;
		EDSBalance[ _to ] += _value;
	
	}

//	function withdrawEDS ( address _to ) public { 
//		require (EDSBalance[msg.sender] == 0);
//		EDSBalance[msg.sender] += 300;
//	}
//

	//notify client about the amount burnt
	event Burn ( address indexed from, uint256 value );

}


