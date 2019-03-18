import React from "react";
import "./Link.css";

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: this.props.clicked
    };
  }
  render() {
    const { clicked } = this.state;
    return clicked ? (
      <button
        style={{
          color: this.props.visitedLink
        }}
        onClick={this.toggleClick}
      >
        Visited Link
      </button>
    ) : (
      <button
        style={{
          color: this.props.link
        }}
        onClick={this.toggleClick}
      >
        Unvisited Link
      </button>
    );
  }
  toggleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
}

export default Link;
