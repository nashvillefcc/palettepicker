import React from "react";
import "./ButtonPanel.css";

const ButtonPanel = ({ buttons }) => {
  return (
    <div className="ButtonPanel">
      {buttons.map(b => {
        return (
          <h3>
            {b.Component} {b.Label}
          </h3>
        );
      })}
    </div>
  );
};

export default ButtonPanel;
