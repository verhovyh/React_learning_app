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

function tick() {


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
        setInterval(this.update, 1000)
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


class App extends Component {

    render() {
        return (
            <div>
                <Hello/>
                <World who={"fff"}/>
                <My_Clock/>
                <Welcome name={"Jane"}/>
            </div>)


    }
}

export default App;