module.exports = {
     networks: {
          ganache: {
               host: "localhost",
               port: 7545,
               network_id: "*" // Match any network id
          },
		 privatenet: { 
			 host: "localhost",
			 port: 8545,
			 network_id: "5538",
			 gas: 4700000,
			 //from: '0x7985a2bbd2b4922578f2a1e6b8c2835e43c6b9a3'

		 }
     }
};

