var edstoken = artifacts.require("./EDSToken.sol" );
var endorsement = artifacts.require("./Endorsement.sol" );

module.exports = function(deployer) {
	deployer.deploy(endorsement);
};


//module.exports = function(deployer) { 
//	//deployer.deploy(endorsement);
//	deployer.deploy(edstoken, 2100000, "Endorse", "%"). then (  () => 
//		deployer.deploy( endorsement )
//	) ;
//}
//
