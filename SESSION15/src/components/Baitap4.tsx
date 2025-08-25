import React, { Component } from 'react'
type State ={
    progress:string,
    submit: boolean
}
export default class Baitap4 extends Component<{}, State> {
    constructor(props:{}){
        super(props)
        this.state ={
            progress : "",
            submit :false
        }
    }
    handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({progress : e.target.value});
        this.setState({submit: false});
    }
    handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        this.setState({submit: true});
    }
  render() {
    return (
      <div>
        Bài tập 4
        <form action="" onSubmit={this.handleSubmit} >
            <label htmlFor="">Tiến độ hoàn thành: {this.state.submit ? this.state.progress : ""} % </label>
            <input type="range" onChange={this.handleChange}/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
