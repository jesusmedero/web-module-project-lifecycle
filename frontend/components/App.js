import React from 'react';
import TodoList from './TodoList';
import Form from './Form';
import axios from 'axios';

const URL = 'http://localhost:9000/api/todos';

export default class App extends React.Component {
  state = {
    todos: [],
    showCompleted: true
  };

  componentDidMount() {
    axios.get(URL)
      .then(response => {
        console.log('Response data:', response.data);
        if (Array.isArray(response.data.data)) {
          this.setState({ todos: response.data.data });
        } else {
          console.error('Response data is not an array:', response.data.data);
        }
      })
      .catch(error => {
        console.error('Error fetching the todos:', error);
      });
  }

  addTodo = (newTodo) => {
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  toggleTodo = (id) => {
    const updatedTodos = this.state.todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos: updatedTodos });
  };

  toggleShowCompleted = () => {
    this.setState({ showCompleted: !this.state.showCompleted });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList 
          todos={this.state.todos} 
          toggleTodo={this.toggleTodo}
          showCompleted={this.state.showCompleted}
        />
        <Form addTodo={this.addTodo} />
        <button onClick={this.toggleShowCompleted}>
          {this.state.showCompleted ? 'Hide Completed' : 'Show Completed'}
        </button>
      </div>
    );
  }
}
