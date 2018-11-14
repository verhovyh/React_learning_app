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


class NameForm extends Component {
    constructor(props) {
        super(props)
        this.state = ({value: ''});

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert("A name was submitted: " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Current value: <label>{this.state.value}</label>
                </label>
            </form>
        )
    }
}


class SelectComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert("Value has beed submitted: " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <input type='submit' value="Submit"/>
            </form>
        )
    }

}

// Boiling
function BoilingVerdict(props) {
    if (props.temp >= 100) return <p> Is boiling!</p>
    else return <p>Not boiling!</p>
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }


    render() {
        const units = this.props.units == 'c' ? "Celsius" : "Fahrenheit"
        const temperature = this.props.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in {units}:</legend>
                <input onChange={this.handleChange} value={temperature}/>
            </fieldset>
        )
    }
}

class TemperatureCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            units: 'c'
        };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }


    handleCelsiusChange(temperature) {
        this.setState({
            tempValue: temperature,
            units: 'c'
        });
        //alert("changed!");
    }

    handleFahrenheitChange(temperature) {
        this.setState({
            tempValue: temperature,
            units: 'f'
        });
    }

    render() {
        const scale = this.state.units;
        const temperature = this.state.tempValue;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (<div>
                    <TemperatureInput units="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                    <TemperatureInput units="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                    <BoilingVerdict temp={celsius}/>
                </div>)
    }
}
// boiling end

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
                <SelectComponent/>
                <TemperatureCalculator/>
            </div>)


    }
}


export default App;