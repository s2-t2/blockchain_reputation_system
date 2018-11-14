import Web3 from 'web3';

//Metamask has injected web3 instance on the page
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	//In the browser where metamask has already injected web3
	web3 = new Web3(window.web3.currentProvider);
} else {
	//on server /Metamask is not running 
	const provider = new Web3.providers.HttpProvider(
		'http://localhost:7545'
	);
	web3 = new Web3(provider );
}


export default web3;
