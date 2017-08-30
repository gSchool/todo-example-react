import React, { Component } from 'react';
import AddTodo from './AddTodo'

class TodoList extends Component {
  state = {
    todos: [
      {name: "Get Groceries", category: "Errand"} //some initial state only provided to show what the data model looks like
    ]
  }

  todos = () => this.state.todos.map((todo, i) => <li key={i}>{todo.name} | {todo.category}</li>) //This shows all the todos

  addTodoHandler = (todo) => { //this function takes a todo as a param, pushes it into the array of todos and sets state.
    let newState = this.state
    newState.todos.push(todo) //this todo comes from the functional AddTodo component
    this.setState(newState)
  }

  render() { //The handler is given to the AddTodo component
    return (
      <div>
        <h3>My List of Things To Do</h3>
        <AddTodo addTodoHandler={this.addTodoHandler}/>
        <ul>
          {this.todos()}
        </ul>
      </div>
    );
  }
}

export default TodoList;
