"use strict";

import { ElementSelectPane } from "./ElementSelectPane.js";
import { PreviewPane } from "./PreviewPane.js";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPreviewElement: null,
      selectedElement: null,
      primaryColor: null,
      secondaryColor: null,
      showColorMenu: false,
      selectedColors: {
        mainBg: "#fff",
        mainText: "#000",
        navbarBg: "#000",
        navbarText: "#000",
        sidebarBg: "#757575",
        sidebarText: "#000"
      }
    };
  }

  render() {
    return (
      <Wrapper>
        <PreviewPane />
        <ElementSelectPane />
      </Wrapper>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById("pane-container"));
