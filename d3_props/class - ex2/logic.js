class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "none"
    };
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    let newState = {
      display: this.state["display"] === "none" ? "block" : "none"
    };
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleBox}>hide/show</button>
        <div id="box" style={{display: this.state.display}}/>
      </div>
    );
  }
}
function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}
render();
