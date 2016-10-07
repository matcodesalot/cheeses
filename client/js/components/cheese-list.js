import React from "react";

let CheeseList = function(props) {
    let cheeses = props.cheeses
    return (
        <ul>
            <li> {cheeses.map(cheese => cheese)} </li>
        </ul>
    );
};

export {CheeseList};