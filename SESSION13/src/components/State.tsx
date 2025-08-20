import React, { Component } from 'react'
type InitialState={
    name:string,
    student:string[],
    isLogin:boolean
}
export default class State extends Component<{},InitialState> {
    constructor(props:{}){
        super(props)
        this.state={
            name:"Minh Thu",
            student:["Hoa","Ngọc","Lan"],
            isLogin:true
        }
    }
    handleChangeName=()=>{
        this.setState({name:"Minh Hằng"});
    }
  render() {
    console.log("componen bị re-render");
    
    return (
      <div><hr />
            Học về state trong Reactjs
            <p> Tên sinh viên: {this.state.name}</p>
            <button onClick={this.handleChangeName}>changeName</button>
            <ul>
                {this.state.student.map((item,index)=><li key={index}>{item}</li>)}
            </ul>
      </div>
    )
  }
}
