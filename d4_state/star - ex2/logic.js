class App extends React.Component {
  render() {
    return <div>{getElements()}</div>;
  }
}

function getElements() {
  const buttonList = ["red", "pink", "purple", "blue"];
  const mapBtn = buttonList.map((item, i) => {
    return <Btn key={i} title={item} />;
  });
  return mapBtn;
}

class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false
    };
    this.setDisabled = this.setDisabled.bind(this);
  }

  setDisabled() {
    this.setState({ isDisabled: true});
  }

  render() {
    return (
      <div>
        <button disabled={this.state.isDisabled} onClick={this.setDisabled}>
          {this.props.title}
        </button>
      </div>
    );
  }
}

function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}
render();
