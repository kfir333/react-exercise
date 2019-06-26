function render(data) {
  ReactDOM.render(
    <div>
      <div>
        <a style={{ border: "2px solid black" }} href={data.linkAddress}>
          go to {data.linkText}
        </a>
      </div>
      <div>
        <input type="range" min={data.min} max={data.max * 2} />
      </div>
      <div>
        <button
          style={{ color: data.color, "font-weight": data["font-weight"] }}
          id="click"
        >
          {data.buttonText}
        </button>
      </div>
    </div>,
    document.getElementById("root")
  );
}

var data = {
  linkAddress: "https://www.google.com/",
  linkText: "google",
  min: -5,
  max: 5,
  color: "maroon",
  "font-weight": "bold",
  buttonText: "click me"
};

render(data);
