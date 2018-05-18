import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import eds from '../ethereum/eds';
import Layout from '../components/Layout';
import { Link } from '../routes';

class ParticipantIndex extends Component {
	static async getInitialProps() {

		const participants = await eds.methods.getAllParticipants().call();
		return {participants: participants};
	
	}


	renderParticipants(){
		const items = this.props.participants.map(address => {
			return {
				header: address,
				description: (
					<Link route={`/participants/${address}/` }>
						<a>View Details </a>
					</Link>
				),
				fluid: true
			};
		});

		return <Card.Group items={items } />;
	
	}

	render( ) {
		//return <div> {this.props.participants[0]} </div>
		return (
			<Layout>
			<div>
				<h3>Get All Participants </h3>

				 
				<Link route="/participants/new">
				<a>
					<Button 
						floated="right"
						content = "Join Network"
						icon	= "add circle"
						primary = {true}
					/>
				</a>
				</Link>

				{this.renderParticipants()}
			</div>
			</Layout>
		);
	}
}

export default ParticipantIndex;

