import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from "./App"
import {NewDiv} from "./App"
import {Practice} from "./components/Overview"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Practice />
    <App />
    <NewDiv />
  </React.StrictMode>
)