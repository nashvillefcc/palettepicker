import React from "react";
import ButtonPanel from "../ButtonPanel/ButtonPanel.js";
import Navbar from "../Navbar/Navbar.js";
import Sidebar from "../Sidebar/Sidebar.js";
import MainContent from "../MainContent/MainContent.js";
import ColorButton from "../ColorButton/ColorButton.js";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Managing state from this top-level container seems like
      // the easiest way to have the color buttons communicate
      // with their respective elements in the preview pane
      mainBg: "#fff",
      mainText: "#000000",
      navbarBg: "#909497",
      navbarText: "#000000",
      sidebarBg: "#D5D8DC",
      sidebarText: "#000000",
      link: "#0032FF",
      visitedLink: "#B000F7",
      displayColorPicker: false
    };
  }

  parentHandler = color => {
    this.setState({ mainBg: color });
  };

  render() {
    const {
      mainBg,
      mainText,
      navbarBg,
      navbarText,
      sidebarBg,
      sidebarText,
      link,
      visitedLink
    } = this.state;
    return (
      <div>
        <span>
          <ColorButton color={mainBg} updateParent={this.parentHandler} />
        </span>
        <Navbar navbarBg={navbarBg} navbarText={navbarText} />
        <span>
          <Sidebar
            link={link}
            visitedLink={visitedLink}
            sidebarText={sidebarText}
            sidebarBg={sidebarBg}
          />
          <MainContent mainContentBg={mainBg} mainContentText={mainText} />
          <p>Background Color is {mainBg}</p>
        </span>
      </div>
    );
  }
}

export default Container;
