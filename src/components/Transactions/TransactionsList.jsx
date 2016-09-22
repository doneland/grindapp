
import React from 'react';

import TransactionRow from './TransactionRow';


class TransactionsList extends React.Component {
  render() {
    const {transactions} = this.props;
    let elements = transactions.map((trsx, i) => {
      return <TransactionRow transaction={trsx} key={i} />
    });

    return (
      <ul>
        {elements}
      </ul>
    );
  }
}


export default TransactionsList;