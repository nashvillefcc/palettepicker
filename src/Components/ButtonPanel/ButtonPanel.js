import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./ButtonPanel.css";

const ButtonPanel = ({ buttons }) => {
  return (
    <div className="ButtonPanel">
      {buttons.map(b => {
        return (
          <h5 key={"h5-key-for-" + b.key}>
            <ColorButton
              key={b.key}
              color={b.color}
              propKey={b.propKey}
              updateParent={b.updateParent}
            />{" "}
            {b.label}
          </h5>
        );
      })}
    </div>
  );
};

export default ButtonPanel;
