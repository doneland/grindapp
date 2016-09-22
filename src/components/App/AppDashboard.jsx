import React from 'react';

import TransactionForm from '../Transactions/TransactionForm.jsx';


class AppDashboard extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div>
        <h1>
          Dashboard of application. Very cool. Fine. Yupp.
        </h1>
        <TransactionForm />
      </div>
    );
  }
}


export default AppDashboard;
