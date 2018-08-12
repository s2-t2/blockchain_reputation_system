import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import eds from '../../ethereum/eds';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class ParticipantNew extends Component {
	state = {
		pseudonym: '',
		errorMessage: '',
		loading: false
	};

	onSubmit = async (event ) => {
		event.preventDefault( );

		this.setState({ loading: true, errorMessage:'' });

		try {

		const accounts = await web3.eth.getAccounts();

		await eds.methods
			.joinNetwork(this.state.pseudonym)
			.send({
				from: accounts[0]
			});

			Router.pushRoute('/');


		} catch (err) {
			this.setState({ errorMessage: err.message });
		}
		this.setState({ loading: false });
	};


	render( ) {
		return (
			<Layout>
				<h3> New Participant </h3>
				
				<Form onSubmit = {this.onSubmit} error={!!this.state.errorMessage} >
					<Form.Field>
						<label>Pseudonym</label>
						<Input 
							label="User Name" 
							labelPosition="right"
							value={this.state.pseudonym}
							onChange={event => this.setState({ pseudonym: event.target.value})}
						/>
					</Form.Field>

					<Message error header="Oops!" content={this.state.errorMessage } />
					<Button loading={this.state.loading } primary>
						Join!!
					</Button>
				</Form>

			</Layout>
		);
	}

} 
export default ParticipantNew;
