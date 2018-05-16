import web3 from './web3';
import eds from './build/Endorsement.json';

const instance = new web3.eth.Contract(
	JSON.parse(eds.interface ),
	'0x3C6625FEAb7Fb17576a1285da7e3a9fE577d2C2A'
);
export default instance;
