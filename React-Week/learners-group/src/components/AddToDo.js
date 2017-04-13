import React, { Component } from "react";
//same as const React = require("react");
//and  const Component = require(react.component);

class AddToDo extends Component {
    constructor(){
        super();

        this.state = { input: "" }

        
    }

    handleInputChange(event){
        this.setState( { input: event.target.value });
    }

    render(){
        console.log(this.props);
        return (
            <div className="add-to-do">
                <input
                    onChange={ (event) => this.handleInputChange( event ) }
                    type="text"
                    value={ this.state.input }
                />
                <button
                    onClick={ () => this.props.createTodo( this.state.input ) }
                >
                    Add To Do</button>
            </div>
        );
    }
}

export default AddToDo;