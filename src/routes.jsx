import React from 'react';
import { Route, IndexRoute} from 'react-router';

import AppRoot from './components/App/AppRoot.jsx';
import AppDashboard from './components/App/AppDashboard.jsx';
import TransactionsPage from './components/Transactions/TransactionsPage.jsx';

const routes = (
  <Route path='/' component={AppRoot} >
    <IndexRoute component={AppDashboard} />
    <Route path="/transactions" component={TransactionsPage} />
  </Route>
);


export default routes;
