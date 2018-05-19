import web3 from './web3';
import eds from './build/Endorsement.json';

const instance = new web3.eth.Contract(
	JSON.parse(eds.interface ),
	'0x84E325E0c88E668DBd9aDc2A4d27Db0745b1157c'
);
export default instance;
