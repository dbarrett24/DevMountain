import React, { Component } from 'react';
import AddToDo from "./components/AddToDo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: []
    };

    this.createTodo = this.createTodo.bind(this);
  }

  createTodo( todoText ){
    this.setState( {todos: [ todoText, ...this.state.todos ] } )
  }

  markComplete(index){
    this.setState({
      todos: [
        ...this.state.todos.slice(0, index)
        , Object.assign( {}, this.state.todos[ index ], {complete: true} )
        , ...this.state.todos.slice(index + 1, this.state.todos.length)
      ]
    })
  }

  render() {
    const todos = this.state.todos
      .filter( todo => todo )
      .map( (todo, index) => (
        <li key={index}>
          { todo.text }
          <input
            checked={todo.complete}
            onChange={(event)=> this.markComplete(index)}
            type="checkbox"
            value={todo.complete}
          />
        </li>
      ) );
    return (
      <div className="app">
        
          <AddToDo createTodo={ this.createTodo }/>
          <ul>
            { todos }
          </ul>
      </div>
    );
  }
}

export default App;
