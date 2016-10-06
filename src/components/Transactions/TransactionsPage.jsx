import React from 'react';
import { connect } from 'react-redux'
import { SubmissionError } from 'redux-form';
import Promise from 'bluebird';

import TransactionsList from './TransactionsList.jsx'; 
import TransactionForm from './TransactionForm.jsx';


const apiCreateTransaction = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 3000);
  });
}


class TransactionsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = null;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    return apiCreateTransaction(data)
      .then(data => {
        this.setState({data: data});
        return data;
      })
      .catch(err => {
        throw new SubmissionError({_error: err});
      });
  }

  render() {
    const { transactions } = this.props; 

    return (
      <div className="row">
        <div className="col-xs-3">
          <TransactionForm onSubmit={this.handleSubmit} />
        </div>
        <div className="col-xs-9">
          <TransactionsList transactions={transactions} />
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    transactions: state.transactions
  }
}

export default connect(mapStateToProps)(TransactionsPage);
