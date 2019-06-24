class Factorial extends React.Component {

  calc(x) {
    if (x === 0) {
      return 1;
    }
    return (x * this.calc(x - 1));
  }

  render() {
    let num = this.calc(5);
    return (
      <div>
        <div>{num}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <div>The Factorial 5 is:</div>
    <Factorial />
  </div>,
  document.getElementById("root")
);
