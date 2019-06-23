class FeatureDescription extends React.Component {
  render() {
    return (
      <div className="text-center">
        <div className="feature-title text-center">
          <strong>User Interface design</strong>
        </div>
        <div className="feature-text-item text-center">
          User Interface design
        </div>
        <div className="feature-text-item text-center">
          User Interface design
        </div>
        <div className="feature-text-item text-center">
          User Interface design
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <div className="nav-bar">
      <ul className="nav-links">
        <li>Services</li>
        <li>Work</li>
        <li>The Team</li>
        <div className="nav-right">
          <img src="./img/smartphone-with-internet-connection.png" />
        </div>
      </ul>
    </div>
    <div className="continuer-fluid main-strip">
      <div className="row">
        <div className="col-12 mt-5 d-flex justify-content-center main-title">
          Services
        </div>
        <div className="col-12 text-center">
          <div className="main-description-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br />
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s
          </div>
        </div>
        <div className="col-6 col-md-12">
          <div className="row justify-content-center">
            <div className="col-md-3 pt-5 text-center">
              <div className="feature-circle fe-1" />
              <FeatureDescription />
            </div>
            <div className="col-md-3 pt-5 text-center">
              <div className="feature-circle fe-2" />
              <FeatureDescription />
            </div>
            <div className="col-md-3 pt-5 text-center">
              <div className="feature-circle fe-3" />
              <FeatureDescription />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>,
  document.getElementById("root")
);
