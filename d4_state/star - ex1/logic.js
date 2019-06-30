class App extends React.Component {
    constructor() {
      super();
      this.state = {
        color: "white"
      };
      this.paint = this.paint.bind(this);
    }
  
    paint(event) {
      this.setState({ color: event.target.value })
    }
  
    render() {
      return (
        <div>
          <button onClick={this.paint} value="blue">Blue</button>
          <button onClick={this.paint} value="green">Green</button>
          <button onClick={this.paint} value="orange">Orange</button>
          <div id="box" style={{ backgroundColor: this.state.color }} />
        </div>
      );
    }
  }
  
  class Btn extends React.Component {
    render() {
      return (
        <div>
          <button>{this.props.title}</button>
        </div>
      );
    }
  }
  
  function render() {
    ReactDOM.render(<App />, document.getElementById("root"));
  }
  render();
  
  