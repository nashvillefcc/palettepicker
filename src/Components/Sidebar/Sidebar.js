import React from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ link, visitedLink, sidebarText, sidebarBg }) => {
  return (
    <nav className="Sidebar" style={{ backgroundColor: sidebarBg }}>
      <p style={{ color: sidebarText }}>Check out these links</p>
      <div>
        <button
          style={{
            color: visitedLink,
            background: "none",
            border: "none",
            margin: "5px"
          }}
        >
          Visited Link
        </button>
      </div>
      <div>
        <button
          style={{
            color: link,
            background: "none",
            border: "none",
            margin: "5px"
          }}
        >
          Link 1
        </button>
      </div>
      <div>
        <button
          style={{
            color: link,
            background: "none",
            border: "none",
            margin: "5px"
          }}
        >
          Link 2
        </button>
      </div>
      <div>
        <button
          style={{
            color: link,
            background: "none",
            border: "none",
            margin: "5px"
          }}
        >
          Link 3
        </button>
      </div>
      <div>
        <button
          style={{
            color: link,
            background: "none",
            border: "none",
            margin: "5px"
          }}
        >
          Link 4
        </button>
      </div>
      <p style={{color: sidebarText, margin: "50px"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus urna
        massa, ultrices vitae risus sed, sodales auctor ex. Nulla fermentum
        condimentum nunc, vel dictum urna maximus vel. Duis et fringilla tellus.
        Sed faucibus lacinia libero, quis euismod elit pretium vel. Phasellus
        sed leo id sapien tincidunt sollicitudin id et magna. Nullam iaculis
        augue quis est vehicula pellentesque et eget elit. Phasellus vestibulum
        felis sed dictum porttitor.
      </p>
    </nav>
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
