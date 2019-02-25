"use strict";

const e = React.createElement;

class ColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "#fff"
    };
  }

  render() {
    return e(
      "button",
      { onClick: () => this.setState({ background: "#000" }) },
      "Change Color"
    );
  }
}

const domContainer = document.querySelector('#color-button');
ReactDOM.render(e(ColorButton), domContainer);
