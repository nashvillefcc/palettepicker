import React from "react";

const NavHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h3 className="navbar-brand">Palette Picker</h3>
      <span>{"Use the color selection boxes below, or get a pregenerated palette from Coolors.co"}</span>
    </nav>
  );
};

export default NavHeader;
