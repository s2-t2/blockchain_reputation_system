pragma solidity ^0.4.18;

import "./Ownable.sol";

contract HasNoEther is Ownable {
	
	modifier HasNoEther { 
		require ( msg.value == 0);
		_;
	}
}
