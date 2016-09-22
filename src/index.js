require('./globalStyles.css');

import React from 'react';
import { Router, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import routes from './routes.jsx';
import { configureStore } from './store'; 

const store = configureStore();

ReactDOM.render(
	<Provider store={store} >
		<Router routes={routes} history={hashHistory} />
	</Provider>,
  document.getElementById('app-content')
);
