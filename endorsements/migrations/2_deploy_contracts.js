var endorsement = artifacts.require("./Endorsement.sol" );

module.exports = function(deployer) { 
	deployer.deploy(endorsement);
}

