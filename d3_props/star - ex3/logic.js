class Box extends React.Component {
  render() {
    return <div className={`box ${this.props.boxSize}`} />;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="boxesOnTop">
          <Box boxSize="x-small" />
          <Box boxSize="small" />
          <Box boxSize="medium" />
          <Box boxSize="small" />
          <Box boxSize="x-small" />
          <Box boxSize="large" />
        </div>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
