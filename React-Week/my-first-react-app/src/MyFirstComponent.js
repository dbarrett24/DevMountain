import React, { Component } from 'react';

//creates new Component class (new component)
class MyFirstComponent extends Component {
    render(){
        // var name = "Sang";
        return <h1> My name is {this.props.name} </h1>
    }
}

export default MyFirstComponent 
