import React from "react";
import {connect} from "react-redux";
import {fetchCheeses} from "../actions/cheese";

let CheeseList = React.createClass({
    componentDidMount: function() {
        this.props.fetchCheese();
    },
    
    render: function() {
        let cheeses = this.props.cheeses
        return (
            <ul>
                {cheeses.map( (cheese, index) => <li key={index}>{cheese}</li>)} 
            </ul>
        );
    }
});

let mapStateToProps = function(state) {
    return{cheeses: state.cheeses};
};

let mapDispatchToProps = function(dispatch) {
    return{
        fetchCheese: function() {
            dispatch(fetchCheeses())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheeseList);