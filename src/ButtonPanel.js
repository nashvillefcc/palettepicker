import ColorSelectButton from './ColorSelectButton'

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showColorPicker: false,
      buttons: this.props.buttons || null
    };
    //this.toggleColorPicker = this.toggleColorPicker.bind(toggleColorPicker);
    //this.handleClick = this.handleClick.bind(handleClick);
  }

  // handleClick = () => {
  //   this.toggleColorPicker();
  // };

  // toggleColorPicker = () => {
  //   this.setState({ showColorPicker: !this.state.showColorPicker });
  // };

  render() {
    return (
      <div id="button-panel-react">
        {this.state.buttons.map(b => (
          <ColorSelectButton color={b.color} />
        ))}
      </div>
    );
  }
}

const testButtons = [{ color: "red" }, { color: "blue" }, { color: "green" }];

ReactDOM.render(
  <ButtonPanel buttons={testButtons} />,
  document.getElementById("button-panel")
);
