const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledEds = require('./build/Endorsement.json');

const provider = new HDWalletProvider(
	'http://localhost:7545'
);
const web3 = new Web3(provider);

const deploy = async (accountNumber = 0) => {
	const accounts = await web3.eth.getAccounts();
	const deployAccount = accounts[accountNumber];
	const data = compiledEds.bytecode;
	const gas = 4000000;
	const gasPrice = web3.utils.toWei('2','gwei');

	console.log('Attempting to deploy from account', deployAccount);

	const result = await new web3.eth.Contract(JSON.parse(compiledEds.interface) )
	.deploy({
		data 
	})
	.send({
		gas, 
		gasPrice, 
		from: deployAccount 
	});

	console.log('Contract deployed to', result.options.address);
};
deploy();



