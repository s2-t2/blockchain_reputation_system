import React, {Component } from 'react';
import Layout from '../../components/Layout';
import Endorsement from '../../ethereum/participants';

class ParticipantShow extends Component {
	static async getInitialProps(props) {
		//props.query.address=address of the actual participant that we show
		//console.log(props.query.address);
		const address = props.query.address;
		const user = Endorsement(props.query.address);

		const summary = await user.methods.getProfile(address).call();

		//const summary = await Endorsement.methods.getProfile(props.query.address).call();

		console.log(summary);

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
