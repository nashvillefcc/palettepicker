import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonPanel from "./ButtonPanel/ButtonPanel.js"

class App extends Component {
  render() {
    return <ButtonPanel buttons={testButtons} />;
  }
}

// this test button array is for... well, testing purposes only
const testButtons = [
  {color: 'red'},
  {color: 'gray'},
  {color: 'green'},
  {color: 'blue'},
  {color: 'orange'},
  {color: 'lightblue'}
]

export default App;
