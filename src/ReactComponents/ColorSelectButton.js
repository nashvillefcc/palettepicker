"use strict";

class ColorSelectButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
  }

  handleClick = () => {
    //open color selection
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="colorButton"
        style={{ background: this.state.color }}
      />
    );
  }
}

ReactDOM.render(
  <ColorSelectButton color="red" />,
  document.getElementById("color-button")
);
