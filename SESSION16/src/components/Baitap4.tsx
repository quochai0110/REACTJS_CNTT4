import React, { Component } from 'react'
type State ={
    count :number;
}

export default class Baitap4 extends Component < {} ,State> {
    constructor (props :{}){
        super (props);
        this.state ={
            count :0 
        }
    }
    handleclick =()=>{
        this.setState (prev =>({count :prev.count +1}))
    }
  render() {
    return (
      <div>
        <h1> Bài tập 4</h1>
        <h3> số nhần nhấp :  </h3>
        <p> {this.state.count}</p>
        <button onClick={this.handleclick}> click </button>
      </div>
    )
  }
}
