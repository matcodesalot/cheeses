import fetch from 'isomorphic-fetch';

let FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';

let fetchCheesesSuccess = function(cheese) {
  return {
    type: FETCH_CHEESES_SUCCESS,
    payload: cheese
  };
  
};

let FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';

let fetchCheesesError = function(error) {
  return {
    type: FETCH_CHEESES_ERROR,
    error: error
  };
  
};

//fetch endpoint for API
let fetchCheesesRequest = function() {
    
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
                dispatch(fetchCheesesError(error))                
            })
    }
}