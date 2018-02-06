import React, { Component } from 'react';

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count : 679
        }
        this.handleIncrementClick = this.handleIncrementClick.bind(this);
        this.handleDecrementClick = this.handleDecrementClick.bind(this);
    }

    handleIncrementClick(){
        this.setState({
            // ...this.state,
            count : this.state.count+1
        })
    }

    handleDecrementClick(){
        this.setState({
            // ...this.state,
            count : this.state.count-1
        })
    }

    shouldComponentUpdate(props,state){
        console.log("Component updating!")
        return state;       
    }

    alert(){
        alert("Hello")
    }

    render(){
        return (
            <div>
            <h1>Counter:{this.state.count}</h1>
            <button className="btn" onClick={this.handleIncrementClick} value="+1">Increment</button>{' '}
            <button className="btn" onClick={this.handleDecrementClick} value="-1">Decrement</button>{' '}
            <button className="btn" onClick={this.alert}>alert</button>
            </div>
        )
    }
}

export default Counter;