import React from "react";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Managing state from this top-level container seems like
      // the easiest way to have the color buttons communicate
      // with their respective elements in the preview pane
      mainBgColor: this.props.mainBg.color,
      mainTextColor: this.props.mainText.color,
      sidebarBgColor: this.props.sidebarBg.color,
      sidebarTextColor: this.props.sidebarText.color,
      navbarBgColor: this.props.navbarBg.color,
      navbarTextColor: this.props.navbarText.color,
      linkColor: this.props.link.color,
      visitedLinkColor: this.props.visitedLink.color
    };
  }

  render() {
    return (
      <div>
        {/* This is kind of what the component structure will look like... I think */}
        <ButtonPanel buttons={theButtons} />
        <PreviewPane>
          <Navbar />
          <Sidebar />
          <MainContent />
        </PreviewPane>
      </div>
    );
  }
}
