"use strict";

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showColorPicker: false,
      buttons: this.props.buttons
    };
    this.toggleColorPicker = this.toggleColorPicker.bind(toggleColorPicker);
    this.handleClick = this.handleClick.bind(handleClick);
  }

  handleClick = () => {
    this.toggleColorPicker();
  };

  toggleColorPicker = () => {
    this.setState({ showColorPicker: !this.state.showColorPicker });
  };

  render() {
    return (
      <div className="buttonPanel">
        {buttons.forEach(b => {
          return (
            <ColorSelectButton
              color={b.color}
              onClick={this.toggleColorPicker}
            />
          );
        })}
      </div>
    );
  }
}
