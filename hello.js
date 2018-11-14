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
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick}/> :
            <LoginButton onClick={this.handleLoginClick}/>;
        return (<div>{button}</div>);
    }
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>);

    return (<ul>{listItems}</ul>);
}


function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    )

    const content =
    props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );

    return (
        <div>{sidebar}
            <hr/>
            {content}
        </div>
    )
}


class NameForm extends Component{
    constructor(props){
        super(props)
        this.state = ({value : ''});

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value : event.target.value})
    }
    handleSubmit(event){
        alert("A name was submitted: " + this.state.value);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Current value: <label>{this.state.value}</label>
                </label>
            </form>
        )
    }
}





class App extends Component {

    render() {
    const posts = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];
        return (
            <div>
                <Hello/>
                <World who={"fff"}/>
                <My_Clock/>
                <Welcome name={"Jane"}/>
                <LoginControl/>
                <NumberList numbers={[1, 2, 3]}/>
                <Blog posts={posts}/>
                <NameForm/>
            </div>)


    }
}


export default App;