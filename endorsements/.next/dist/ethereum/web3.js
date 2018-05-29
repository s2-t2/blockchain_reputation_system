'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Assuming that metamask has already injected a web3 instance onto the page.
//window is a global variable "only" available in the browser.
//const web3 = new Web3(window.web3.currentProvider);

//let - in order to be able to reassign this variable
var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	//we are in the browser, metamask has already injected web3
	web3 = new _web2.default(window.web3.currentProvider);
} else {
	//we are on server OR user is not running metamask
	var provider = new _web2.default.providers.HttpProvider(
	//'http://localhost:7545'
	'https://rinkeby.infura.io/yeyODM5MwlsKyyJqs2vx');
	web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLFlBQUo7O0FBRUEsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsU0FBdUIsQUFBNUQsYUFBeUUsQUFDeEU7QUFDQTtRQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBQ0E7QUFIRCxPQUdPLEFBQ047QUFDQTtLQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixBQUNoQjtBQUNBO0FBRmdCLEFBQWpCLEFBSUE7UUFBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0E7QUFHRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N1amF0YS9Eb2N1bWVudHMvTWFzdGVycy1UaGVzaXMvZW5kb3JzZW1lbnRzIn0=