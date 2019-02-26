import React from "react";

class ColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.color };
  }

  render(){
    return <button style={{background: this.state.color, width: "100px", height: "100px"}} />
  }
}

export default ColorButton;