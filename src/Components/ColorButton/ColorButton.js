import React from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";

class ColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
    };
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    this.props.updateParent(color.hex, this.props.propKey)
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "50px",
          height: "50px",
          border: "solid black",
          borderRadius: "2px",
          background: `${this.props.color}`
        },
        swatch: {
          padding: "1px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer"
        },
        popover: {
          position: "absolute",
          left: "30%",
          zIndex: "2"
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }
    });

    return (
      <span>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker
              color={this.props.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </span>
    );
  }
}

export default ColorButton;
