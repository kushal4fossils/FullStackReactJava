import React, { Component } from 'react';
import './Style.css';
class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
    }

    render() {
        return (
            <div className="Counter">
                <button onClick={this.increment}>+1</button>
                <span className="count">{this.state.counter}</span>
            </div>
        );
    }
    increment() {
        console.log("Increment");
        //  this.state.counter++;
        this.setState({
            counter: this.state.counter + 1
        }
        );
    }
}

export default Counter;