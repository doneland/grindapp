import React from 'react';

import TransactionForm from '../Transactions/TransactionForm.jsx';

import AppRootStyles from './AppRoot.css';


class AppDashboard extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div>
        <h1 className={AppRootStyles['gray-background']}>
          Dashboard of application. Very cool.
        </h1>
        <TransactionForm />
      </div>
    );
  }
}


export default AppDashboard;
