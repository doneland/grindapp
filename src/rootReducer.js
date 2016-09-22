import { combineReducers } from 'redux';


// Reducers.
import AppReducer from './components/App/AppReducer';
import TransactionReducer from './components/Transactions/transactionReducer'; 


// Export combined reducers.
export default combineReducers({
  app: AppReducer,
  transactions: TransactionReducer
});
