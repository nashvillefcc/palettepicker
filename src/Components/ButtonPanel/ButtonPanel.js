import React from "react";
import "./ButtonPanel.css";

const ButtonPanel = ({ buttons }) => {
  return (
    <div className="ButtonPanel">
      {buttons.map(b => b)}
    </div>
  );
};

export default ButtonPanel;
