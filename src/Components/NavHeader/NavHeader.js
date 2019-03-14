import React from "react";

const NavHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h3 className="navbar-brand">Palette Picker</h3>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <button className="nav-link">Sign In/Sign Up</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavHeader;
