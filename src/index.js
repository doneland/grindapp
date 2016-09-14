import React from 'react';
import { Router, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';


import routes from './routes.jsx';


ReactDOM.render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('app-content')
);

