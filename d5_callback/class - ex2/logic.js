class Box extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickBox = this.handleClickBox.bind(this);
  }

  handleClickBox(event) {
    event.stopPropagation();
    this.props.handleChangeColor(this.props.color);
  }

  render() {
    return (
      <div onClick={this.handleClickBox} className={"box " + this.props.color}>
        {this.props.children}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white'
    };
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleChangeColor(color) {
    console.log(color);
      this.setState({
        color: color
      });
  }
  render() {
    return (
      <div style={{ backgroundColor: this.state.color }}>
        <Box handleChangeColor={this.handleChangeColor} color="green">
          <Box handleChangeColor={this.handleChangeColor} color="blue">
            <Box handleChangeColor={this.handleChangeColor} color="pink">
              <Box handleChangeColor={this.handleChangeColor} color="purple" />
              <Box handleChangeColor={this.handleChangeColor} color="purple" />
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
}

function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

render();
