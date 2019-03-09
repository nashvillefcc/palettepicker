import React from "react";
import ColorButton from "../ColorButton/ColorButton"
import "./ButtonPanel.css";

const ButtonPanel = ({ buttons }) => {
  return (
    <div className="ButtonPanel">
      {buttons.map(b => {
        return (
          <h3 key={"h3-key-for-" + b.key}>
            <ColorButton
              key={b.key}
              color={b.color}
              propKey={b.propKey}
              updateParent={b.updateParent}
            />{" "}
            {b.label}
          </h3>
        );
      })}
    </div>
  );
};

export default ButtonPanel;
