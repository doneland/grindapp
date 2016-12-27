import fetch from 'isomorphic-fetch';
import config from '../config';


export const API_URL = config.baseUrl;
export default function callApi(endpoint, method='get', body) {
  return fetch(`${API_URL}/${endpoint}`, {
    headers: {'content-type': 'application/json'},
    method,
    body: JSON.stringify(body)
  })
  .then(response => {
    return response.json()
      .then((json) => {
        return {
          json,
          response
        }
      })
      .catch(err => {
        return {
          json: {},
          response
        }
      });
  })
  .then(({json, response}) => {
    if (response.status >= 400 || !response.ok) {
      return Promise.reject(json);
    }
    return json;
  });
}