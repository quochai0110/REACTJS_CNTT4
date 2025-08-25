import React, { Component } from 'react'
type Color = {
    color: string
    fount: boolean
}

export default class Baitap2 extends Component <object, Color> {
    constructor(props: object){
        super(props);
        this.state = {
            color: "",
            fount: false
        }
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({fount: true});
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({color: e.target.value});
        this.setState({fount: false});
    }
  render() {
    return (
      <div>
        Bài tập 2
        <h2>Color: {this.state.fount ? this.state.color : ""}  </h2>
        <form action="" onSubmit={this.handleSubmit}>
            <input type="color" onChange={this.handleChange}/>
            <button>submit</button>
        </form>
      </div>
    )
  }
}
