import React, { Component } from "react"

export class App extends Component {
  render(){
    return <>
      <form>
        <label htmlFor="taskInput">Add Tasks: </label>
        <input type="text" name="taskInput" id="taskInput"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  }
}