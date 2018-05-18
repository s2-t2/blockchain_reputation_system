import React, {Component } from 'react';
import { Card, Button, Form, Input, Message, Group, Grid } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Endorsement from '../../ethereum/participants';
import eds from '../../ethereum/eds';
import web3 from '../../ethereum/web3';
//import Endorse from '../../components/Endorse';

class ParticipantShow extends Component {
	static async getInitialProps(props) {

		const accounts = await web3.eth.getAccounts();
		//props.query.address=address of the actual participant that we show
		//console.log(props.query.address);
		const address = props.query.address;
		const user = Endorsement(props.query.address);

		const summary = await eds.methods.getProfile(props.query.address).call();
		const impact = await eds.methods.computeImpact(props.query.address).call();
		const index = await eds.methods.getParticipantIndex(props.query.address).call();
		const name = await eds.methods.participants(index).call();
		
		return {
			index: index,
			name: name[1],
			address: props.query.address,
			impact: impact,

			outDegree: summary[0],
			usedPower: summary[1],
			outConns: summary[2],

			inDegree: summary[3],
			receivedPoints: summary[4],
			inConns: summary[5]
		};


		}

	onHandleClick = async() => {
		const accounts = await web3.eth.getAccounts();
		await eds.methods.endorse(this.props.index).send({
			from: accounts[0]
		});

		console.log("hello");
		//console.log(this.props.address);
	
	}

	
	

	renderCards( ) {
		const {
			outDegree,
			usedPower,
			outConns,
			inDegree,
			receivedPoints,
			inConns,
			impact,
			name	
		} = this.props;


		const items = [
			{ 
				header:this.props.address,
				meta:'Public key used when joining the network',
				description: 'Public key of the participant',
				style: {overflowWrap: 'break-word'}
			
			},
			{
				header: name,
				meta: 'User Name',
				description: 'Pseudonym used when joining the network',
				style: {overflowWrap: 'break-word'}
			
			},
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
				header: impact,
				meta: 'Endorsement Impact',
				description: 'Total Endorsement Impact made by the participant',
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
				<Grid>
					<Grid.Column width={10 }>
						{this.renderCards()}
					</Grid.Column>
				</Grid>
				<Grid>
					<Grid.Column width={15}>
					<Button color="green" basic onClick={this.onHandleClick}>
						Endorse this Participant!
					</Button>
					</Grid.Column>
				</Grid>
			</Layout>
			);
	}
}

export default ParticipantShow;
