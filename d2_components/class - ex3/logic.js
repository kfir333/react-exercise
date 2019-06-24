class Numbers extends React.Component {
  constructor(){
    super();
    this.getSet = this.getSet.bind(this);
  }

  getSet() {
    for (let i = 1; i < 12; i++) {
      document.getElementById("title").innerHTML += (" " + i);
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.getSet}>Show Numbers</button>
        <div id="title" />
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Numbers />
   
  </div>,
  document.getElementById("root")
);
