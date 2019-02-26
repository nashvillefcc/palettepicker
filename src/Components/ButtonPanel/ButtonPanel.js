import React from "react";
import ColorButton from "../ColorButton/ColorButton.js";

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showColorPicker: false,
      buttons: this.props.buttons
    };
    this.toggleColorPicker = this.toggleColorPicker.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleColorPicker = () => {
    this.setState({ showColorPicker: !this.state.showColorPicker });
  };

  handleClick = () => {
    this.toggleColorPicker();
  };

  render() {
    return this.state.buttons.map(b => {
      return <ColorButton color={b.color} onClick={this.handleClick} />;
    });
  }
}
