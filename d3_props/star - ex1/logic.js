class CardItem extends React.Component {
  render() {
    return (
      <div className="card-item">
        <div className="card-content">
          <img src={this.props.src} />
          <h3>{this.props.title}</h3>
          <h4>{this.props.description}</h4>
          {this.getSelectedBreadCrumb()}
        </div>
        
      </div>
    );
  }
  getSelectedBreadCrumb() {
    return (
      <div>
        <div
          className={`breadCrumb ${
            this.props.index === 0 ? "breadCrumb-selected" : ""
          }`}
        />
        <div
          className={`breadCrumb ${
            this.props.index === 1 ? "breadCrumb-selected" : ""
          }`}
        />
        <div
          className={`breadCrumb ${
            this.props.index === 2 ? "breadCrumb-selected" : ""
          }`}
        />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <div>{this.props.data}</div>;
  }
}

const cards = [
  {
    colorClass: "blue",
    src: "./img/card-1.jpg",
    title: "Ready to Travel",
    description:
      "Choose your destination. Plan your trip. Pick the best place for your holiday."
  },
  {
    colorClass: "green",
    src: "./img/card-2.jpg",
    title: "Select the Date",
    description:
      "Select the day. Pick your ticket. We give you the best price. We guarantee"
  },
  {
    colorClass: "lilac",
    src: "./img/card-3.png",
    title: "Feels Like Home",
    description:
      "Enjoy your holiday! Don't forget to take a beer and take a picture"
  }
];

const mapCards = cards.map((user, i) => {
  return (
    <CardItem
      index={i}
      src={cards[i].src}
      title={cards[i].title}
      description={cards[i].description}
    />
  );
});

function render(mapCards) {
  ReactDOM.render(<App data={mapCards} />, document.getElementById("root"));
}

render(mapCards);
