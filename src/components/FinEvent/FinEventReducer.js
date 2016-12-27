import * as actions from './finEventActions';

import {
  GET_ALL_FIN_EVENTS_REQUEST,
  GET_ALL_FIN_EVENTS_SUCCESS,
  GET_ALL_FIN_EVENTS_FAILURE
} from './finEventActions';

const initialState = {
  events: [
    {
      ticker: 'AAPL:US', 
      name: 'X', 
      code: 'REVENUE:1Q__CHANGE:1Y', 
      value: 0.1452, 
      units: 'percent'
    }, {
      ticker: 'Y', 
      name: 'INTERNATIONAL BUSINESS MACHINES', 
      code: 'NET_INCOME:1Q__CHANGE:1Y', 
      value: 0.1452, 
      units: 'percent'
    }, {
      ticker: 'Z', 
      name: 'DISNEY', 
      code: 'REVENUE:1Q__CHANGE:1Y', 
      value: -0.0645, 
      units: 'percent'
    }
  ],
  error: null
};


function FinEventReducer(state=initialState, action) {
  switch(action.type) {
    case GET_ALL_FIN_EVENTS_SUCCESS:
      console.log('Events loaded:', action.payload.events)
      let newState = Object.assign({}, state, {
        events: action.payload['events']
      });
      return newState;
      break;   
    default:
      return state;
  }

  return state;
}


export default FinEventReducer;