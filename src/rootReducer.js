import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


// Reducers.
import AppReducer from './components/App/AppReducer';
import TransactionReducer from './components/Transactions/transactionReducer'; 


// Export combined reducers.
export default combineReducers({
  app: AppReducer,
  form: formReducer,
  transactions: TransactionReducer
});
