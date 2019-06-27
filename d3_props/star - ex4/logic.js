class ColorSelector extends React.Component {
  constructor(props) {
      super(props);
      this.select = this.select.bind(this);
  }

  select(event) {
      var color_label = event.target.selectedOptions[0].textContent;
      var label = event.target.nextSibling.children[0];
      label.textContent = " " + color_label;
      label.style.color = event.target.value;
  }

  render() {
      return (
          <div>
              <select onChange={this.select}>
                  <option value={this.props.colors[0].cssValue}>{this.props.colors[0].name}</option>
                  <option value={this.props.colors[1].cssValue}>{this.props.colors[1].name}</option>
                  <option value={this.props.colors[2].cssValue}>{this.props.colors[2].name}</option>
              </select>
              <h2> your {this.props.item} will be 
                  <span> </span>
              </h2>
          </div>
      );
  }
}

class Color {
  constructor(name, cssValue) {
      this.name = name;
      this.cssValue = cssValue;
  }
}

function render() {
  var shirtColors = [
      new Color("sky blue", "dodgerblue"), 
      new Color("crazy pink", "magenta"),
      new Color("royal yellow", "gold")
  ];
  var dressColors = [
      new Color("shining green", "lime"), 
      new Color("dark blue", "darkslateblue"),
      new Color("mellow pink", "hotpink")
  ];
  ReactDOM.render(
      <div>
          <ColorSelector item="shirt" colors={shirtColors} />
          <ColorSelector item="dress" colors={dressColors}/>
      </div>,
      document.getElementById("root")
  );
}




render();
