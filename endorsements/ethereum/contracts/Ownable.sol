pragma solidity ^0.4.18;

contract Ownable {
	address public owner;
	address newOwner;

	event ownershipTransfer (
		address indexed oldOwner, 
		address indexed newOwner
	);

	//constructor function to set the owner of contract
	function Ownable( ) public { 
		owner = msg.sender;
	}

	modifier onlyOwner(){ 
		require(msg.sender == owner);
		_;
	}

	function transferOwnership(address _newOwner) public onlyOwner{
		require(_newOwner != 0x0);
		newOwner = _newOwner;
		owner = newOwner;
	}
}
