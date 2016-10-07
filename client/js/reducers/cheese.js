//Reducers

import actions from "../actions/cheese";

let initialState = {
    cheeses: [],
    loading: false,
    error: null
};

let cheeseReducer = function(state, action) {
    state = state || initialState;
    switch(action.type) {
        case actions.FETCH_CHEESES_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        
        case actions.FETCH_CHEESES_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                cheeses: actions.payload
            });
        
        case actions.FETCH_CHEESES_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: actions.error
            });
        
        default:
            return state;
    }
};

export default cheeseReducer;