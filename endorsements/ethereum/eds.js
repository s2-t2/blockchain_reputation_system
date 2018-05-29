import web3 from './web3';
import eds from './build/Endorsement.json';

const instance = new web3.eth.Contract(
	JSON.parse(eds.interface ),
	//'0xec634F9a727b8E3A0159Cb374231e61F753cb8C1'
	'0xf6a2D92b6d644f0dd43ADe46ceC655B53688ab4A'
);
export default instance;
