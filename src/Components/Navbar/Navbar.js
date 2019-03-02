import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = ({ navbarContentBg, navbarContentText }) => {
  return (
    <div className="Navbar" style={{ backgroundColor: navbarContentBg }}>
      <span className="Navbar-text" style={{ color: navbarContentText }}>
        Home
      </span>
      <span className="Navbar-text" style={{ color: navbarContentText }}>
        About{" "}
      </span>
      <span className="Navbar-text" style={{ color: navbarContentText }}>
        {" "}
        Privacy{" "}
      </span>
      <span className="Navbar-text" style={{ color: navbarContentText }}>
        {" "}
        Contact Us{" "}
      </span>
    </div>
  );
};

Navbar.propTypes = {
  navbarBg: PropTypes.string.isRequired,
  navbarText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  navbarBg: "#c50e0e",
  navbarText: "#000000"
};

export default Navbar;
