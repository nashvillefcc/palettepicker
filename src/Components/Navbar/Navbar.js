import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = ({ navbarBg, navbarText }) => {
  return (
    <span className="Navbar" style={{ backgroundColor: navbarBg }}>
      <h5 className="Navbar-text" style={{ color: navbarText }}>
        Home
      </h5>
      <h5 className="Navbar-text" style={{ color: navbarText }}>
        About
      </h5>
      <h5 className="Navbar-text" style={{ color: navbarText }}>
        Privacy
      </h5>
      <h5 className="Navbar-text" style={{ color: navbarText }}>
        Contact Us
      </h5>
    </span>
  );
};

Navbar.propTypes = {
  navbarBg: PropTypes.string.isRequired,
  navbarText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  navbarBg: "#909497",
  navbarText: "#000000"
};

export default Navbar;
