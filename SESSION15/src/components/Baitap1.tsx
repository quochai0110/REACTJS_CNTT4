import React, { Component } from 'react'
type InitState = {
    email:string
}
export default class Baitap1 extends Component<{},InitState> {
    constructor(props:{}){
        super(props)
        this.state = {
            email : ""
        }
    }
  handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state.email);
  }
  handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
        email:e.target.value
    })
  }
    render() {
    return (
      <div>
        Bài Tập 1
        <form action="" onSubmit={this.handleSubmit} >
            <label htmlFor="">Email:</label><br />
            <input type="text" name="email" id="" placeholder='nhap email' onChange={this.handleChange}/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
