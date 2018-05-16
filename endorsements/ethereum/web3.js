import Web3 from 'web3';

//Assuming that metamask has already injected a web3 instance onto the page.
//window is a global variable "only" available in the browser.
//const web3 = new Web3(window.web3.currentProvider);

//let - in order to be able to reassign this variable
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	//we are in the browser, metamask has already injected web3
	web3 = new Web3(window.web3.currentProvider);
} else {
	//we are on server OR user is not running metamask
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/yeyODM5MwlsKyyJqs2vx'
	);
	web3 = new Web3(provider );
}


export default web3;
