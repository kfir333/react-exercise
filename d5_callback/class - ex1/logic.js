class App extends React.Component {
  constructor() {
    super();
    this.state = {
      label: "0"
    };
    this.changeLabelCallBack = this.changeLabelCallBack.bind(this);
  }

  changeLabelCallBack(text){
    this.setState({
      label: text
    });
  }

  render() {
    return (
      <div>
        <div>Select a username:</div>
        <InputUser handleChangeLabel={this.changeLabelCallBack}/>
        <div>{this.state.label}</div>
      </div>
    );
  }
}

class InputUser extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.props.handleChangeLabel(event.target.value);
  }

  render(){
    return(
      <input onChange={this.handleChange}></input>
    );
  }
}
function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}
render();
