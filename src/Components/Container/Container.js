import React from "react";
import ButtonPanel from "../ButtonPanel/ButtonPanel.js";
import Navbar from "../Navbar/Navbar.js";
import Sidebar from "../Sidebar/Sidebar.js";
import MainContent from "../MainContent/MainContent.js";

class Container extends React.Component {
  state = {
    // Managing state from this top-level container seems like
    // the easiest way to have the color buttons communicate
    // with their respective elements in the preview pane
    mainBg: "#FFFFFF",
    mainText: "#000000",
    navbarBg: "#909497",
    navbarText: "#000000",
    sidebarBg: "#D5D8DC",
    sidebarText: "#000000",
    link: "#0032FF",
    visitedLink: "#B000F7",
    displayColorPicker: false
  };

  toggleColorPicker = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
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
        <ButtonPanel/>
        <Navbar navbarBg={navbarBg} navbarText={navbarText} />
        <span>
          <Sidebar
            link={link}
            visitedLink={visitedLink}
            sidebarText={sidebarText}
            sidebarBg={sidebarBg}
          />
          <MainContent mainBg={mainBg} mainText={mainText} />
        </span>
      </div>
    );
  }
}

export default Container;
