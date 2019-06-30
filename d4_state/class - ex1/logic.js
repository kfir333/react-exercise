class App extends React.Component {
  constructor() {
    super();
    this.state = {
      key: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    let newState = {
      key: this.state.key + 1
    };
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>increment</button>
        <span id="result">{this.state["key"]}</span>
      </div>
    );
  }
}
function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}
render();
