import React from "react";
import PropTypes from "prop-types";
import "./ColorButton.css";

const ColorButton = ({ color }) => {
  return (
    <button
      className="ColorButton"
      style={{
        background: color
      }}
    />
  );
};

ColorButton.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorButton;
