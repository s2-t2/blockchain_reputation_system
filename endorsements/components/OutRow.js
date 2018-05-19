import React, {Component} from 'react';
import { Table } from 'semantic-ui-react';

class OutRow extends Component { 
	render() {
		const { Row, Cell } = Table;

		return (
			<Row>
				<Cell>{this.props.id} </Cell>
				<Cell>{this.props.outConns}</Cell>
			</Row>
		);
	}
}

export default OutRow;

