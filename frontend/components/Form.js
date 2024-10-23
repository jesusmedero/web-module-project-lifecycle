import React from 'react'

export default class Form extends React.Component {
  state = {
    task: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { task } = this.state;

    if (task.trim()) {
      const newTodo = { id: Date.now(), text: task, completed: false };
      this.props.addTodo(newTodo);
      this.setState({ task: '' }); 
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.task} 
          onChange={(e) => this.setState({ task: e.target.value })} 
          placeholder="New Task" 
        />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}