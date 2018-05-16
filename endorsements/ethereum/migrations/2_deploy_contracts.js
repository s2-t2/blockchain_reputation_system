var endorsement = artifacts.require("./Endorsement.sol");
var MarketPlace = artifacts.require("./MarketPlace.sol");

module.exports = function(deployer) {
	deployer.deploy(endorsement);
	deployer.deploy(MarketPlace);
};


//module.exports = function(deployer) { 
//	//deployer.deploy(endorsement);
//	deployer.deploy(edstoken, 2100000, "Endorse", "%"). then (  () => 
//		deployer.deploy( endorsement )
//	) ;
//}
//
