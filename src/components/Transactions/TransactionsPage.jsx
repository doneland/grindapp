import React from 'react';
import { connect } from 'react-redux'

import TransactionsList from './TransactionsList.jsx'; 



class TransactionsPage extends React.Component {

	render() {
		const { transactions } = this.props; 
		return (
			<TransactionsList transactions={transactions} />
		);
	}
}


function mapStateToProps(state) {
	return {
		transactions: state.transactions
	}
}

export default connect(mapStateToProps)(TransactionsPage);
