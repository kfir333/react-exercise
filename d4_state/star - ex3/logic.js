class App extends React.Component {
  render() {
    return (
      <div>
        <StateEx />
        <PropEx visibility={true} />
      </div>
    );
  }
}

class StateEx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: true
    };
    this.isVisible = this.isVisible.bind(this);
    this.setVisible = this.setVisible.bind(this);
  }

  isVisible() {
    return this.state["visibility"];
  }

  setVisible() {
    this.setState({ visibility: false });
  }

  render() {
    return (
      <div>
        <div style={{ visibility: this.isVisible() ? "visible" : "hidden" }}>
          This is example text
        </div>
        <button onClick={this.setVisible}>Click to hide state</button>
      </div>
    );
  }
}

class PropEx extends React.Component {
  constructor(props) {
    super(props);
  }

  isVisible() {
    return this.props.visibility;
  }

  setVisible() {
    $("#propText").css("visibility", "hidden");
  }

  render() {
    return (
      <div>
        <div id="propText">This is example text</div>
        <button onClick={this.setVisible}>Click to hide props</button>
      </div>
    );
  }
}
function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}
render();
