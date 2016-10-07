//Reducers

import {
  FETCH_CHEESES_REQUEST, FETCH_CHEESES_SUCCESS,
  FETCH_CHEESES_ERROR
} from '../actions/cheese'

let initialState = {
    cheeses: [],
    loading: false,
    error: null
};

let cheeseReducer = function(state, action) {
    state = state || initialState;
    switch(action.type) {
        case FETCH_CHEESES_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        
        case FETCH_CHEESES_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                cheeses: action.payload
            });
        
        case FETCH_CHEESES_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.error
            });
        
        default:
            return state;
    }
};

export default cheeseReducer;