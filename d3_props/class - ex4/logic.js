class Box extends React.Component {
  render() {
      return (
          <div className={"box " + this.props.color}>
              {this.props.children}
              {console.log(this.props.children)}
          </div>
      );
  }
}

function render() {
  var tree = 
  <Box color="green">
      <Box color="blue">
          <Box color="pink">
              <Box color="purple"></Box>
              <Box color="purple"></Box>
          </Box>
      </Box>
  </Box>;

  ReactDOM.render(
      tree,
      document.getElementById("root")
  );
}

render();