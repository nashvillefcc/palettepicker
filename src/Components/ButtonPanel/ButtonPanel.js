import React from "react";
import ColorButton from "../ColorButton/ColorButton";
import PaletteInput from "../PaletteInput/PaletteInput";
import "./ButtonPanel.css";

const ButtonPanel = ({ buttons }) => {
  return (
    <div className="ButtonPanel container-fluid d-inline-flex justify-content-center flex-wrap">
      {buttons.map(b => {
        return (
          <div className="card" key={"card-for-" + b.key}>
            <div className="card-header">{b.label}</div>
            <div className="card-body color-button-card">
              <ColorButton
                key={b.key}
                color={b.color}
                propKey={b.propKey}
                updateParent={b.updateParent}
              />
            </div>
            <div className="card-footer">Hex: {b.color}</div>
          </div>
        );
      })}
      <PaletteInput
        colorsToChange={[
          "mainBg",
          "navbarBg",
          "sidebarBg",
          "link",
          "visitedLink"
        ]}
        updateParent={buttons[0].updateParent}
      />
    </div>
  );
};

export default ButtonPanel;
