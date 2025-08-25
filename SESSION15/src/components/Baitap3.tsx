import React, { Component } from 'react'
type State={
    date:string
    submit:string
}

export default class Baitap3 extends Component<object,State> {
    constructor(props:object){
        super(props)
        this.state={
            date:"",
            submit:"",
        }
    }
    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            date:e.target.value
        })
    }
handleSubmit=(e: React.FormEvent<HTMLFormElement> )=>{
    e.preventDefault()
    this.setState({
        submit: this.state.date
    }
    )
    
}
  render() {    
    return (
      <div>
        Bài tập 3
        <form action="" onSubmit={this.handleSubmit}>
            <h3>Ngày sinh: {this.state.submit}</h3>
            <input type="date" onChange={this.handleChange}/>
            <br />
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
