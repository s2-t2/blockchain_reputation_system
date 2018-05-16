import React, {Component } from 'react';
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
		console.log(summary );
//		user.methods
//			.getProfile(props.query.address)
//			.call()
//			.then( (summary) => {
//				console.log( summary )
//			}) ;
		

		//user.methods.getProfile(props.query.address).call().then(function(instance){summary=instance;});

		return { };
	
	}


	render( ) {
		
		return (
			<Layout>
				<h3> Participant show </h3>
			</Layout>
			);
	}
}

export default ParticipantShow;
