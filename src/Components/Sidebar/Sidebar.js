import React from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";
import Link from "../Link/Link";

const Sidebar = ({ link, visitedLink, sidebarText, sidebarBg }) => {
  return (
    <nav className="Sidebar" style={{ backgroundColor: sidebarBg }}>
      <h5 style={{ color: sidebarText }}>
        Click links to see visited/unvisited color
      </h5>
      <div>
        <Link link={link} visitedLink={visitedLink} />
      </div>
      <div>
        <Link link={link} visitedLink={visitedLink} />
      </div>
      <div>
        <Link link={link} visitedLink={visitedLink} />
      </div>
      <div>
        <Link link={link} visitedLink={visitedLink} />
      </div>
      <p style={{ color: sidebarText, margin: "50px" }}>
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
