"use strict";

class ElementSelectPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElement: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(button) {
    this.setState({ selectedElement: button });
  }

  render() {
    const { buttons } = props;
    return (
      <div id="select-buttons-container">
        {buttons.forEach(b => {
          <button id={b.buttonName} onClick={this.handleClick(b.buttonName)}>
            {b.buttonName}
          </button>;
        })}
        ;
      </div>
    );
  }
}
