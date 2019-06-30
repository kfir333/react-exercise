class Box extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
          <div className={this.props.color}>
              <h4>{this.props.label}</h4>
          </div>
      );
  }
}

class App extends React.Component {
  render() {
      return (
          <div>
              <Box color="green" label="fresh"> </Box>
              <Box color="blue" label="calm"></Box>
              <Box color="pink" label="adventurous"></Box>
              <Box color="purple" label="happy"></Box>
          </div>
      );
  }
}

function render() {
  ReactDOM.render(
      <App />,
      document.getElementById("root")
  );
}

render();