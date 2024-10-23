import React from 'react'

export default class Todo extends React.Component {
  render() {
    const { todo, toggleTodo } = this.props;

    return (
      <li
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.completed ? '✔ ' : ''}{todo.text}
      </li>
    );
  }
  }

