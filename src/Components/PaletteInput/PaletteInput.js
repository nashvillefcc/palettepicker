import React from "react";

class PaletteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div className="card">
        <form id="paletteSubmitForm" onSubmit={this.paletteSwap}>
          <div className="card-body">
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
            Paste the entire URL string here: <br />
            <input type="text" onChange={this.handleChange} />
          </div>
          <div className="card-footer">
            <input
              type="submit"
              className="btn btn-primary"
              value="Click to Apply Changes"
            />
          </div>
        </form>
      </div>
    );
  }
  paletteSwap = e => {
    e.preventDefault();
    if (this.state.value !== "") {
      let fullString = this.state.value;
      let hexArray = fullString.replace("https://coolors.co/", "").split("-"); // get rid of address part of URL & split the hex codes from the url string into an array
      this.props.colorsToChange.map((c, i) => {
        // map over every color (c) and assign it to the color code at the index (i) in the hexArray
        return this.props.updateParent("#" + hexArray[i], c);
      });
      document.getElementById("paletteSubmitForm").reset();
    }
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
}

export default PaletteInput;
