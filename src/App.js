import React, { Component } from "react"

export class App extends Component {
  constructor(){
    super();

    this.state = {
      task: { text: ''},
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
      }
    })
  }

  onSubmitTask = (e) => {
    e.preventDefault()
    this.setState({
      task: this.state.tasks.concat(this.state.task),
      task: { text: '' },
    })
  }

  render() {
    const { task, tasks } = this.state

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter tasks</label>
          <input onChange={this.handleChange} value={task.text} type='text' id='taskInput'/>
          <button type='submit'>Add Task</button>
        </form>
      </div>
    )
  }
}