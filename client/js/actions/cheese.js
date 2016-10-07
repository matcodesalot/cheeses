//Actions
import fetch from 'isomorphic-fetch';

export let FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export let fetchCheesesSuccess = function(cheese) {
  return {
    type: FETCH_CHEESES_SUCCESS,
    payload: cheese
  };
  
};

export let FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export let fetchCheesesError = function(error) {
  return {
    type: FETCH_CHEESES_ERROR,
    error: error
  };
  
};

export let FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export let fetchCheesesRequest = function() {
  return {
    type: FETCH_CHEESES_REQUEST,
  };
  
};

//fetch endpoint for API
export let fetchCheeses = function() {
    return function(dispatch) {
        let endpoint = '/cheeses';
        return fetch(endpoint)
            .then(function(response){
                if(response.status < 200 || response.status >= 300) {
                    let error = new Error(response.statusText);
                    error.response = response;
                    throw error;
                }
                return response;
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                dispatch(fetchCheesesSuccess(data));
            })
            .catch(function(error){
                dispatch(fetchCheesesError(error));             
            });
    };
};
