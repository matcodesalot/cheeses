//Reducers

import actions from "./../actions/cheese";

let initialState = {
    cheeses: [],
    loading: false,
    error: null
};

let cheeseReducer = function(state, action) {
    state = state || initialState;
    switch(action.type) {
        case actions.FETCH_CHEESES_SUCCESS:
        
        case actions.FETCH_CHEESES_ERROR:
    }
}