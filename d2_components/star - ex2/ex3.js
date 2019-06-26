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

class Icons extends React.Component {
  constructor() {
    super();
    // this.onHoverIcons = this.onHoverIcons.bind(this);
  }
  render() {
    return (
      <div>
        <img
          id="icon"
          onMouseEnter={this.onHoverIcons}
          onMouseLeave={this.onLeaveIcons}
          src="./img/smartphone-with-internet-connection.png"
        />
      </div>
    );
  }

  onHoverIcons() {
    document.getElementById("icon").style.background = "blue";
  }

  onLeaveIcons() {
    document.getElementById("icon").style.background = "none";
  }
}

class NavItem extends React.Component {
  constructor() {
    super();
    this.boldLink = this.boldLink.bind(this);
  }

  render() {
    return <li onClick={this.boldLink}>{this.props.btnTitle}</li>;
  }

  boldLink() {
    console.log(this);
  }
}

ReactDOM.render(
  <div>
    <div className="nav-bar">
      <ul className="nav-links">
        <NavItem btnTitle={"Services"} />
        <NavItem btnTitle={"Work"} />
        <NavItem btnTitle={"The Team"} />
        <div className="nav-right">
          <Icons />
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
