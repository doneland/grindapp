import React from 'react';


class TransactionsList extends React.Component {
  render() {
    const {transactions} = this.props;
    let elements = transactions.map(trsx => {
      return <li>`${trsx.category} - ${trsx.value}`</li> 
    });

    return (
      <ul>
        {elements}
      </ul>
    );
  }
}


export default TransactionsList;