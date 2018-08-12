import Web3 from 'web3';

//Assuming that metamask has already injected a web3 instance onto the page.
//window is a global variable "only" available in the browser.

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	//In the browser, metamask has already injected web3
	web3 = new Web3(window.web3.currentProvider);
} else {
	//on server OR user is not running metamask
	const provider = new Web3.providers.HttpProvider(
		'http://localhost:7545'
	);
	web3 = new Web3(provider );
}


export default web3;
