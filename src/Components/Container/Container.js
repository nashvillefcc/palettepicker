import React from "react";
import ButtonPanel from "../ButtonPanel/ButtonPanel.js";
import Navbar from "../Navbar/Navbar.js";
import Sidebar from "../Sidebar/Sidebar.js";
import MainContent from "../MainContent/MainContent.js";
import ColorButton from "../ColorButton/ColorButton.js";
import "./Container.css";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        Label: "Main background",
        Component: (
          <ColorButton // ColorButton is a component that handles displaying the color selection popover and handles color change
            key="mainBgButton" // each ColorButton in this array gets mapped over, so it needs a key identifier
            color={mainBg} // the color we are changing is passed as props to the ColorButton
            propKey="mainBg" // this tells the updateParent method which key in state is getting its color updated
            updateParent={this.parentHandler} // this is the handler function that sets the state in this parent Container component
          />
        )
      },
      {
        Label: "Main text",
        Component: (
          <ColorButton
            key="mainTextButton"
            color={mainText}
            propKey="mainText"
            updateParent={this.parentHandler}
          />
        )
      },
      {
        Label: "Navbar background",
        Component: (
          <ColorButton
            key="navbarBgButton"
            color={navbarBg}
            propKey="navbarBg"
            updateParent={this.parentHandler}
          />
        )
      },
      {
        Label: "Navbar text",
        Component: (
          <ColorButton
            key="navbarTextButton"
            color={navbarText}
            propKey="navbarText"
            updateParent={this.parentHandler}
          />
        )
      },
      {
        Label: "Sidebar background",
        Component: (
          <ColorButton
            key="sidebarBgButton"
            color={sidebarBg}
            propKey="sidebarBg"
            updateParent={this.parentHandler}
          />
        )
      },
      {
        Label: "Sidebar text",
        Component: (
          <ColorButton
            key="sidebarTextButton"
            color={sidebarText}
            propKey="sidebarText"
            updateParent={this.parentHandler}
          />
        )
      },
      {
        Label: "Links",
        Component: (
          <ColorButton
            key="linkButton"
            color={link}
            propKey="link"
            updateParent={this.parentHandler}
          />
        )
      },
      {
        Label: "Visited links",
        Component: (
          <ColorButton
            key="visitedLinkButton"
            color={visitedLink}
            propKey="visitedLink"
            updateParent={this.parentHandler}
          />
        )
      }
    ];
    return (
      <div className="Container">
        <h2>Color Selection buttons</h2>
        {/* ButtonPanel is a parent component that maps over an array of buttons and renders them inline into a row */}
        <ButtonPanel buttons={colorButtons} />
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
        <div className="color-code-table">
          <h2>Hex Color Codes</h2>
          <table>
            <tr>
              <th>Page Element</th>
              <th>Code</th>
            </tr>
            <tr>
              <td>Main content background</td>
              <td>{mainBg}</td>
            </tr>
            <tr>
              <td>Main content text</td>
              <td>{mainText}</td>
            </tr>
            <tr>
              <td>Navbar background</td>
              <td>{navbarBg}</td>
            </tr>
            <tr>
              <td>Navbar text</td>
              <td>{navbarText}</td>
            </tr>
            <tr>
              <td>Sidebar background</td>
              <td>{sidebarBg}</td>
            </tr>
            <tr>
              <td>Sidebar text</td>
              <td>{sidebarText}</td>
            </tr>
            <tr>
              <td>Link text</td>
              <td>{link}</td>
            </tr>
            <tr>
              <td>Visited link</td>
              <td>{visitedLink}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Container;
