import React, {Component} from 'react';
import { Table } from 'semantic-ui-react';

class ConnectionRow extends Component { 
	render() {
		const { Row, Cell } = Table;

		return (
			<Row>
				<Cell>{this.props.id} </Cell>
				<Cell>{this.props.inConns}</Cell>
			</Row>
		);
	}
}

export default ConnectionRow;
