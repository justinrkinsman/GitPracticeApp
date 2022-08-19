import React, { Component } from "react"

let taskArray = []

function Submit(e) {
    e.preventDefault()
    let taskName = document.getElementById('taskInput').value
    taskArray.push(taskName)
    console.log(taskArray)
}

export {Submit}