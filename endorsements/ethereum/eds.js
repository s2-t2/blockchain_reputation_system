import web3 from './web3';
import eds from './build/Endorsement.json';

const instance = new web3.eth.Contract(
	JSON.parse(eds.interface ),
	'0x0F1Dafc529292B97f7989D872408550B525EcD30'
);
export default instance;
