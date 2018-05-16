import React, {Component } from 'react';
import { Card } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Endorsement from '../../ethereum/participants';
import eds from '../../ethereum/eds';

class ParticipantShow extends Component {
	static async getInitialProps(props) {
		//props.query.address=address of the actual participant that we show
		//console.log(props.query.address);
		//const address = props.query.address;
		const user = Endorsement(props.query.address);

		const summary = await eds.methods.getProfile(props.query.address).call();
		//console.log(summary );
//		user.methods
//			.getProfile(props.query.address)
//			.call()
//			.then( (summary) => {
//				console.log( summary )
//			}) ;
		

		//user.methods.getProfile(props.query.address).call().then(function(instance){summary=instance;});

		return {
			outDegree: summary[0],
			usedPower: summary[1],
			outConns: summary[2],

			inDegree: summary[3],
			receivedPoints: summary[4],
			inConns: summary[5]
		};
	
	}

	renderCards( ) {
		const {
			outDegree,
			usedPower,
			outConns,
			inDegree,
			receivedPoints,
			inConns
		} = this.props;


		const items = [
			{
				header: outDegree,
				meta: 'nEG',
				description:'Degree of Outgoing connections',
				style: {overflowWrap: 'break-word'}
			},
			{
				header: usedPower,
				meta: 'consumed Points',
				description:'Amount of points already consumed',
				style: {overflowWrap: 'break-word'}
			},
			{
				header: inDegree,
				meta: 'nER',
				description:'Degree of Incoming Connections',
				style: {overflowWrap:'break-word'}
			},
			{
				header: receivedPoints,
				meta: 'Received Endorsement Points',
				description: 'Sum of all the endorsement points received',
				style: {overflowWrap:'break-word'}
			},
			{
				header: outConns,
				meta: 'Outgoing Connections',
				description: 'Array of addresses to whom the participant has endorsed',
				style: {overflowWrap: 'break-word'}
			},
			{
				header: inConns,
				meta:'Incoming Connections',
				description:'Array of addresses from whom the participant has received endorsement',
				style: {overflowWrap:'break-word'}
			}
		];
		return <Card.Group items={items} />;
	
	}


	render( ) {
		
		return (
			<Layout>
				<h3> Participant Details </h3>
				{this.renderCards() }
			</Layout>
			);
	}
}

export default ParticipantShow;
