import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import CheeseList from './components/cheese-list';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cheeseReducer from './reducers/cheese';
import { Provider } from 'react-redux';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

let store = createStore(cheeseReducer, applyMiddleware(thunk));

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Provider store={store}>
            <CheeseList />
        </Provider>,
        document.getElementById('app')
    );
});

// document.addEventListener('DOMContentLoaded', function(){
//     ReactDOM.render(
//         <CheeseList 
//             cheeses={
//                 [
//                     "Bath Blue",
//                     "Barkham Blue",
//                     "Buxton Blue"
//                 ]
//             }
//         />, 
//         document.getElementById('app')
//     );
// });
