import apiCaller from '../../utils/apiCaller';


export const GET_ALL_FIN_EVENTS_REQUEST = 'GET_ALL_FIN_EVENTS_REQUEST';
export function getAllFinEventRequest() {
  return {
    type: GET_ALL_FIN_EVENTS_REQUEST,
    payload: {}
  }
}


export const GET_ALL_FIN_EVENTS_SUCCESS = 'GET_ALL_FIN_EVENTS_SUCCESS';
export function getAllFinEventSuccess(events) {
  return {
    type: GET_ALL_FIN_EVENTS_SUCCESS,
    payload: {
      events
    }
  }
}


export const GET_ALL_FIN_EVENTS_FAILURE = 'GET_ALL_FIN_EVENTS_FAILURE';
export function getAllFinEventsFailure(error) {
  return {
    type: GET_ALL_FIN_EVENTS_FAILURE,
    payload: {
      error
    }
  }
}


export function fetchFinEvents() {
  return (dispatch) => {
    return apiCaller('finevents')
      .then(res => {
        return dispatch(getAllFinEventSuccess(res.events));
      })
      .catch(res => {
        return dispatch(getAllFinEventsFailure(res.error));
      });
  }
}