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
        super();
        this.state = {
            time: new Date()
        }
    }


    render() {
        const element = (<div>It's {this.state.time.toLocaleTimeString()} o'clock </div>);
        return element;
    }

    componentDidMount() {
        setInterval(this.update, 1000)
    }

    update = () => {
        this.setState({
            time: new Date()
        })
    }


}


class App extends Component {

    render() {
        return <h1><Hello/><World who={"fff"}/> <My_Clock/></h1>

    }
}

export default App;