import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';


class Hello extends Component {
    render() {
        return <span>Hello </span>
    }
}


class World extends Component {
    render() {
        const who = this.props.who;
        return <span>{who}!</span>
    }
}

World.propTypes = {

    who: PropTypes.number.isRequired

}

class My_Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }


    render() {
        const element = (<div>It's {this.state.date.toLocaleTimeString()} o'clock </div>);
        return element;
    }

    componentDidMount() {
        this.timerID = setInterval(this.update, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    update = () => {
        this.setState({
            date: new Date()
        })
    }

}

function Welcome(props) {
    const element = <div>Hello, {props.name}!</div>
    return element
}


function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

class LoginControl extends Component {
    constructor(props) {
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

        this.state = {isLoggedIn: false}

    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>
        }
        return (<div>
                {button}
            </div>

        )
    }
}


class App extends Component {

    render() {
        return (
            <div>
                <Hello/>
                <World who={"fff"}/>
                <My_Clock/>
                <Welcome name={"Jane"}/>
                <LoginControl/>
            </div>)


    }
}

export default App;