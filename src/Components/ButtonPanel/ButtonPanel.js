import React from "react";
import PropTypes from "prop-types";
import ColorButton from "../ColorButton/ColorButton.js";
import "./ButtonPanel.css";

const ButtonPanel = ({ buttons }) => {
  return (
    <div className="ButtonPanel">
      {buttons.map(b => {
        return <ColorButton color={b.color} />;
      })}
    </div>
  );
};

ButtonPanel.propTypes = {
  buttons: PropTypes.array.isRequired
}

ButtonPanel.defaultProps = {
  buttons: [
    // mainBg
    {color: "#FFFFFF"},
    // mainText
    {color: "#000000"},
    // navbarBg
    {color: "#909497"},
    // navbarText
    {color: "#000000"},
    // sidebarBg
    {color: "#D5D8DC"},
    // sidebarText
    {color: "#000000"},
    // link
    {color: "#0032FF"},
    // visitedLink
    {color: "#B000F7"},
  ]
}

export default ButtonPanel;
