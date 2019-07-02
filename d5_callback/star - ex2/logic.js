class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isChecked1: false,
      isChecked2: false
    };
    this.isChecked1 = this.isChecked1.bind(this);
    this.isChecked2 = this.isChecked2.bind(this);
  }

  isChecked1() {
    this.setState({
      isChecked1: !this.state.isChecked1
    });
  }

  isChecked2() {
    this.setState({
      isChecked2: !this.state.isChecked2
    });
  }

  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.termsText}</div>
        <CheckBox
          handle={this.isChecked1}
          cbxTitle="I have read the conditions"
        />
        <CheckBox handle={this.isChecked2} cbxTitle="I accept all the terms" />
        <button disabled={!(this.state.isChecked1 && this.state.isChecked2)}>
          Next
        </button>
      </div>
    );
  }
}

class CheckBox extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" onClick={this.props.handle} />
        <label>{this.props.cbxTitle}</label>
      </div>
    );
  }
}

function render() {
  ReactDOM.render(<App title="Terms of Use" termsText="bla bla"/>, document.getElementById("root"));
}
render();
