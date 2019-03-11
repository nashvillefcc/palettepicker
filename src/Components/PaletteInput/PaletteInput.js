import React from "react";
import "./PaletteInput.css";

class PaletteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div id="coolors-instruction">
        Get a pre-generated palette from{" "}
        <a
          href="https://coolors.co/app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coolors.co
        </a>
        <br />
        Copy the entire url string from the browser's address bar
        <br />
        <form id="paletteSubmitForm" onSubmit={this.paletteSwap}>
          Paste the entire URL string here:{" "}
          <input type="text" onChange={this.handleChange} />
          <br />
          <input
            type="submit"
            className="btn btn-primary"
            value="Click to Apply Changes"
          />
        </form>
        <br />
      </div>
    );
  }
  paletteSwap = e => {
    e.preventDefault();
    let fullString = this.state.value;
    let hexArray = fullString.replace("https://coolors.co/", "").split("-"); // get rid of address part of URL & split the hex codes from the url string into an array
    this.props.colorsToChange.map((c, i) => {
      // map over every color (c) and assign it to the color code at the index (i) in the hexArray
      return this.props.updateParent("#" + hexArray[i], c);
    });
    document.getElementById("paletteSubmitForm").reset();
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
}

export default PaletteInput;
