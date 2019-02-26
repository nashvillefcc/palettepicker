import React from "react";
import "./ColorButton.css";

class ColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.color };
  }

  render(){
    return <button style={{background: this.state.color}} />
  }
}

export default ColorButton;