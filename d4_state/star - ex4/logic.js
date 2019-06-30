class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rand: Math.floor(Math.random() * 99 + 1)
    };
  }
  render() {
    return (
      <div className="tool-bar">
        <div className="icons profile" />
        <div className="icons star" />
        <div className="icons message">
          <div className="notification-bubble">
            <span id="notification-num">{this.state.rand}</span>
          </div>
        </div>
      </div>
    );
  }
}

function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}
render();
