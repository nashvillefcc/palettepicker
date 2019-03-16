import React from "react";
import ButtonPanel from "../ButtonPanel/ButtonPanel.js";
import Navbar from "../Navbar/Navbar.js";
import Sidebar from "../Sidebar/Sidebar.js";
import MainContent from "../MainContent/MainContent.js";
import NavHeader from "../NavHeader/NavHeader.js";
import "./Container.css";
import PaletteInput from "../PaletteInput/PaletteInput.js";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Managing state from this top-level container seems like
      // the easiest way to have the color buttons communicate
      // with their respective elements in the preview pane
      mainBg: "#f5f5f5",
      mainText: "#252525",
      navbarBg: "#909497",
      navbarText: "#252525",
      sidebarBg: "#D5D8DC",
      sidebarText: "#252525",
      link: "#0032FF",
      visitedLink: "#B000F7"
    };
  }

  parentHandler = (color, propKey) => {
    // passing in the propKey lets us dynamically access which color we want to change in state
    this.setState({ [propKey]: color });
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
    const colorButtons = [
      {
        label: "Main background", // each ColorButton has a corresponding label to be displayed in the Button panel
        key: "mainBgButton", // each ColorButton in this array gets mapped over, so it needs a key identifier
        color: mainBg, // the color we are changing is passed as props to the ColorButton
        propKey: "mainBg" // this tells the updateParent method which key in state is getting its color updated // this is the handler function that sets the state in this parent Container component
      },
      {
        label: "Main text",
        key: "mainTextButton",
        color: mainText,
        propKey: "mainText"
      },
      {
        label: "Navbar background",
        key: "navbarBgButton",
        color: navbarBg,
        propKey: "navbarBg"
      },
      {
        label: "Navbar text",
        key: "navbarTextButton",
        color: navbarText,
        propKey: "navbarText"
      },
      {
        label: "Sidebar background",
        key: "sidebarBgButton",
        color: sidebarBg,
        propKey: "sidebarBg"
      },
      {
        label: "Sidebar text",
        key: "sidebarTextButton",
        color: sidebarText,
        propKey: "sidebarText"
      },
      {
        label: "Links",
        key: "linkButton",
        color: link,
        propKey: "link"
      },
      {
        label: "Visited links",
        key: "visitedLinkButton",
        color: visitedLink,
        propKey: "visitedLink"
      }
    ];
    // give the parentHandler method to all buttons before they are passed into ButtonPanel
    colorButtons.map(b => (b.updateParent = this.parentHandler));
    return (
      <div className="Container">
        <NavHeader />
        <h2>Color Selection buttons</h2>
        {/* ButtonPanel is a parent component that maps over an array of buttons and renders them inline into a row */}
        <ButtonPanel buttons={colorButtons} />
        <PaletteInput
          colorsToChange={[
            "mainBg",
            "navbarBg",
            "sidebarBg",
            "link",
            "visitedLink"
          ]}
          updateParent={this.parentHandler}
        />
        <h2>Real-Time Preview</h2>
        <div className="preview-window">
          <Navbar navbarContentBg={navbarBg} navbarContentText={navbarText} />
          <section>
            <Sidebar
              link={link}
              visitedLink={visitedLink}
              sidebarText={sidebarText}
              sidebarBg={sidebarBg}
            />
            <MainContent mainContentBg={mainBg} mainContentText={mainText} />
          </section>
        </div>
      </div>
    );
  }
}

export default Container;
