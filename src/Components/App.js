import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonPanel from "./ButtonPanel/ButtonPanel.js"

class App extends Component {
  render() {
    return <ButtonPanel buttons={testButtons} />;
  }
}

const testButtons = [
  {color: 'red'},
  {color: 'blue'},
  {color: 'green'}
]

export default App;
