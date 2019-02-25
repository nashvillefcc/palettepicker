"use strict";

class ColorSelectButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
  }

  render() {
    return (
      <button
        className="colorButton"
        style={{ background: this.state.color }}
      />
    );
  }
}
