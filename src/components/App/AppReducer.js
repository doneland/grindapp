import * as actions from './AppActions';


const initialState = {
  message: 'This is the default message.'
};


function AppReducer(state=initialState, action) {
  switch (action.type) {
    case '':
      break;
    default:
      return state;
  }

  return state;
}


export default AppReducer;
