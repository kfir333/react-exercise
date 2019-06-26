class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Title />
                <Services />
            </div>
        );
    }
}

class Menu extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div className="menu">
                <span onClick={this.select}>SERVICES</span>
                <span onClick={this.select}>WORK</span>
                <span onClick={this.select}>THE TEAM</span>
                <div></div>
            </div>
        );
    }
}

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.select = this.select.bind(this);
    }
    select(event) {
        var menuItems = document.querySelectorAll(".menu span");
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove("selected");
        }
        event.target.classList.add("selected");
    }
    render() {
        return (
            <span onClick={this.select}>{this.props.text}</span>
        );
    }
}

class Title extends React.Component {
    render() {
        return (
            <div className="title">
                <h1>SERVICES</h1>
                <p>
                    our vision is simple, we want to create websites and applications with both high quality
                    design and easy-to-access content. The finished product will be totaly unique and awesome.
                </p>
            </div>
        );
    }
}

class Services extends React.Component {
    render() {
        return (
            <div id="services">
                <Service1 />
                <Service2 />
                <Service3 />
            </div>
        );
    }
}

class Service1 extends React.Component {
    render() {
        return (
            <div className="service">
                <Icon />
                <Description />
            </div >
        );
    }
}

class Icon extends React.Component {
    constructor() {
        super();
        this.changeBackground = this.changeBackground.bind(this);
        this.fade = this.fade.bind(this);
    }
    changeBackground() {
        document.querySelector(".icon-wrapper.blue").classList.add("strong");
    }
    fade() {
        document.querySelector(".icon-wrapper.blue").classList.remove("strong");
    }
    render() {
        return (
            <div onMouseEnter={this.changeBackground} onMouseLeave={this.fade} className="icon-wrapper blue">
                <img src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"></img>
            </div>
        );
    }
}

class Description extends React.Component {
    constructor() {
        super();
        this.enlarge = this.emphasize.bind(this);
    }
    emphasize(event) {
        event.target.classList.add("border");
        var element = event.target;
        setTimeout(function () {
            element.classList.remove("border");
        }, 1000);
    }
    render() {
        return (
            <div className="title">
                <h5 onMouseEnter={this.emphasize}>USER INTERFACE</h5>
                <div>Wireframing</div>
                <div>Prototyping</div>
                <div>Usability Testing</div>
            </div>
        );
    }
}

class Service2 extends React.Component {
    render() {
        return (
            <div className="service">
                <Icon2 />
                <Description2 />
            </div >
        );
    }
}

class Icon2 extends React.Component {
    constructor() {
        super();
        this.changeBackground = this.changeBackground.bind(this);
        this.fade = this.fade.bind(this);
    }
    changeBackground() {
        document.querySelector(".icon-wrapper.green").classList.add("strong");
    }
    fade() {
        document.querySelector(".icon-wrapper.green").classList.remove("strong");
    }
    render() {
        return (
            <div onMouseEnter={this.changeBackground} onMouseLeave={this.fade} className="icon-wrapper green">
                <img src="http://simpleicon.com/wp-content/uploads/rocket.png"></img>
            </div>
        );
    }
}

class Description2 extends React.Component {
    constructor() {
        super();
        this.enlarge = this.emphasize.bind(this);
    }
    emphasize(event) {
        event.target.classList.add("border");
        var element = event.target;
        setTimeout(function () {
            element.classList.remove("border");
        }, 1000);
    }
    render() {
        return (
            <div className="title">
                <h5 onMouseEnter={this.emphasize}>CONCEPT AND IDEAS</h5>
                <div>Conceptualization</div>
                <div>Digital Planning</div>
                <div>Product Strategy</div>
            </div>
        );
    }
}

class Service3 extends React.Component {
    render() {
        return (
            <div className="service">
                <Icon3 />
                <Description3 />
            </div >
        );
    }
}

class Icon3 extends React.Component {
    constructor() {
        super();
        this.changeBackground = this.changeBackground.bind(this);
        this.fade = this.fade.bind(this);
    }
    changeBackground() {
        document.querySelector(".icon-wrapper.lilac").classList.add("strong");
    }
    fade() {
        document.querySelector(".icon-wrapper.lilac").classList.remove("strong");
    }
    render() {
        return (
            <div className="icon-wrapper lilac" onMouseEnter={this.changeBackground} onMouseLeave={this.fade}>
                <img src="https://openclipart.org/image/2400px/svg_to_png/213252/Gear-icon.png"></img>
            </div>
        );
    }
}

class Description3 extends React.Component {
    constructor() {
        super();
        this.enlarge = this.emphasize.bind(this);
    }
    emphasize(event) {
        event.target.classList.add("border");
        var element = event.target;
        setTimeout(function () {
            element.classList.remove("border");
        }, 1000);
    }
    render() {
        return (
            <div className="title">
                <h5 onMouseEnter={this.emphasize}>DESIGN AND BRANDING</h5>
                <div>Interactive Design</div>
                <div>Graphic Design</div>
                <div>Unique Strategy</div>
            </div>
        );
    }
}


function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}

// invoking the render function
render();