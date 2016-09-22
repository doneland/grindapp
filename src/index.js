require('./globalStyles.css');

import React from 'react';
import { Router, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import routes from './routes.jsx';


ReactDOM.render(
	<Provider>
		<Router routes={routes} history={hashHistory} />
	</Provider>,
  document.getElementById('app-content')
);
