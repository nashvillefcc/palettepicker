import React from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ link, visitedLink, sidebarText, sidebarBg }) => {
  return (
    <div className="Sidebar" style={{ backgroundColor: sidebarBg }}>
      <p style={{ color: sidebarText }}>Check out these links</p>
      <button style={{ color: visitedLink, background: "none", border: "none" }}>
        Visited Link
      </button>
      <button style={{ color: link, background: "none", border: "none" }}>
        Link 1
      </button>
      <button style={{ color: link, background: "none", border: "none" }}>
        Link 2
      </button>
      <button style={{ color: link, background: "none", border: "none" }}>
        Link 3
      </button>
      <button style={{ color: link, background: "none", border: "none" }}>
        Link 4
      </button>
    </div>
  );
};

Sidebar.propTypes = {
  link: PropTypes.string.isRequired,
  visitedLink: PropTypes.string.isRequired,
  sidebarText: PropTypes.string.isRequired,
  sidebarBg: PropTypes.string.isRequired
};

Sidebar.defaultProps = {
  link: "#0032FF",
  visitedLink: "#B000F7",
  sidebarBg: "#D5D8DC",
  sidebarText: "#000000"
};

export default Sidebar;
