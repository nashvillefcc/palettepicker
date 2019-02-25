class RenderTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name || "stranger"
    };
  }

  render() {
    return <h1>Hello {this.state.name}</h1>;
  }
}

ReactDOM.render(<RenderTest name="Tyler"/>, document.getElementById("render-test"));
