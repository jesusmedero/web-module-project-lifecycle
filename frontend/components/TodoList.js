import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    const { todos, toggleTodo, showCompleted } = this.props;

    return (
      <ul>
        {todos
          .filter(todo => showCompleted || !todo.completed)
          .map(todo => (
            <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
          ))
        }
      </ul>
    );
  }
}