const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledEds = require('./build/Endorsement.json');
//const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'frost quiz fetch save toddler film few stereo grief kitchen air sing',
  'https://rinkeby.infura.io/yeyODM5MwlsKyyJqs2vx'
);
const web3 = new Web3(provider);

const deploy = async (accountNumber = 0) => {
	const accounts = await web3.eth.getAccounts();
	const deployAccount = accounts[accountNumber];
	const data ='0x' + compiledEds.bytecode;
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

//  const result = await new web3.eth.Contract(JSON.parse(interface))
//    .deploy({ data: bytecode, arguments: ['Hi there!'] })
//    .send({ gas: '1000000', from: accounts[0] });
//
  //console.log('Contract deployed to', result.options.address);
};
deploy();



