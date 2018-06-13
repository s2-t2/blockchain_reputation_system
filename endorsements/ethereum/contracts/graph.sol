pragma solidity ^0.4.18;

contract Graph {
	struct nodes {
		uint inDegree;
		uint outDegree;
		uint adjacentNodes;
	}


	function netFlow(address _node) {
		// to check if node 'A' is honest 
		// verify if adjacent of - adjacent nodes of 'A' is not just adj(A) 
		address node = msg.sender;
	
	}

}
