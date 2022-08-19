import React, { Component } from "react"

export class App extends Component {
  constructor(){
    super();

    this.state = {
      task: { text: ''},
      tasks: [],
    };
  }

  render() {
    const { task, tasks } = this.state

    return (
      <div>
        <form>
          <label htmlFor="taskInput">Enter tasks</label>
          <input type='text' id='taskInput'/>
          <button type='submit'>Add Task</button>
        </form>
      </div>
    )
  }
}