import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './MyFirstComponent';
import List from './List';

class App extends Component {

  //setting up state
  constructor(props){
    //pass in props and type super(props). If you don't you'll get an error. It just sets up things.
    super(props)

    this.state = {
      divStyle: {
        color: 'red',
        backgroundColor: 'blue'

      }
    }
    this.handleClick = this.handleClick.bind(this);
    
  }


//this method handles click events. You can name it what ever you want, but it is commonly handle click.
  handleClick(){
    this.setState({
    //you can write CSS style as an object variable. See below:
      divStyle: {
        color: 'blue',
        backgroundColor: 'red'
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div onClick={this.handleClick} style={this.state.divStyle}>
          Click me!
        </div>
        


          {/*<List title="Groceries" list={['eggs', 'milk', 'potatoes']}/>*/}
          
      </div>
    );
  }
}

export default App;
