import React, {Component } from 'react';
import { Card, Button, Form, Input, Message, Group, Grid, Table } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Endorsement from '../../ethereum/participants';
import ConnectionRow from '../../components/ConnectionRow';
import OutRow from '../../components/OutRow';
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

		const givenTo = await eds.methods.getGivenTo(props.query.address).call();
		const receivedFrom = await eds.methods.getReceivedFrom(props.query.address).call();

		const givenToCount = givenTo.length;
		const receivedFromCount = receivedFrom.length;

		const outConns = await Promise.all(
			Array(givenToCount)
				.fill()
				.map((element,index) => {
					return givenTo[index];
				})
		);

		//console.log(outConns );

		const inConns = await Promise.all(
			Array(receivedFromCount)
				.fill()
				.map((element,index) =>{ 
					return receivedFrom[index];
				})
		);

		//console.log(inConns);
		
		return {
			index: index,
			name: name[1],
			address: props.query.address,
			impact: impact/1000000000000000000000000000,

			outDegree: summary[0],
			usedPower: summary[1]/1000000000,
		//	outConns: summary[2],

			inDegree: summary[3],
			receivedPoints: summary[4]/1000000000,
		//	inConns: summary[5]
			inConns,
			outConns
		};


		}

	onHandleClick = async() => {
		const accounts = await web3.eth.getAccounts();
		await eds.methods.endorse(this.props.index).send({
			from: accounts[0]
		});

		//console.log(this.props.address);
	
	}

	onRemove = async () => {

		const accounts = await web3.eth.getAccounts();

		await eds.methods.removeEndorsement(this.props.address).send({
			from: accounts[0]
		});
	}

	renderOutRows() {
		return this.props.outConns.map((outConns,index)=>{
			return (
				<OutRow
					key={index}
					outConns={outConns}
					id={index}
					address ={this.props.address}
				/>
			);
		});
	}

	renderRows(){
		return this.props.inConns.map((inConns,index)=>{
			return (
				<ConnectionRow 
					key = {index}
					inConns = {inConns}
					id = {index}
					address ={this.props.address }
				/>
			);
		
		});
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
			}
//			{
//				header: outConns,
//				meta: 'Outgoing Connections',
//				description: 'Array of addresses to whom the participant has endorsed',
//				style: {overflowWrap: 'break-word'}
//			},
//			{
//				header: inConns,
//				meta:'Incoming Connections',
//				description:'Array of addresses from whom the participant has received endorsement',
//				style: {overflowWrap:'break-word'}
//			}
		];
		return <Card.Group items={items} />;
	}

	render( ) {
		const {Header, Row, HeaderCell, Body } = Table;
		
		return (
			<Layout>
				<h3> Participant Details </h3>
				<Grid>
					<Grid.Column width={15}>
						{this.renderCards()}
					</Grid.Column>
				</Grid>
				<Grid>
					<Grid.Column width={10}>
					<Button color="green" basic onClick={this.onHandleClick}>
						Endorse this Participant!
					</Button>
					<Button color="teal" basic onClick={this.onRemove} >
						Remove Endorsement 
					</Button>
					</Grid.Column>
				</Grid>
			<Table>
				<Header>
					<Row>
						<HeaderCell>ID</HeaderCell>
						<HeaderCell>IncomingConnections</HeaderCell>
					</Row>
				</Header>
				<Body>
					{this.renderRows()}
				</Body>
			</Table>
			<Table>
			<Header>
				<Row>
					<HeaderCell>ID</HeaderCell>
					<HeaderCell>Outgoing Connections</HeaderCell>
				</Row>
			</Header>
			<Body>
				{this.renderOutRows()}
			</Body>
			</Table>
			</Layout>
			);
	}
}

export default ParticipantShow;
