class RandWin extends React.Component {
  isWin() {
    let rand = Math.floor(Math.random() * 10 + 1);
    return rand > 5 ? <h1>You won</h1> : <h3>You lost</h3>;
  }

  render() {
    return (
      <div>
        <div>{this.isWin()}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <RandWin />
  </div>,
  document.getElementById("root")
);
