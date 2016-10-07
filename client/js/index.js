import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {CheeseList} from './components/cheese-list';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <CheeseList 
            cheeses={
                [
                    "Bath Blue",
                    "Barkham Blue",
                    "Buxton Blue"
                ]
            }
        />, 
        document.getElementById('app')
    );
});
