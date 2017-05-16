import React, { Component } from 'react';
import Child from './Child';
import LoginForm from './LoginForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      chores: [
        'Laundry',
        'Dishes',
        'Vacuum'
      ]
    }
  }

  handleLogin(user){
    
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Babies are nice. They love their mommies.
        </p>

        <Child title={this.state.user} list={this.state.chores}/>
        <LoginForm onLogin={this.state.login}/>
      </div>
    );
  }
}

export default App;
