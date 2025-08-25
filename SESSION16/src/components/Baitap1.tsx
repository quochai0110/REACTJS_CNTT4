import React, { Component } from 'react'
type State={
    studentList:string[];
}
export default class Baitap1 extends Component<{},State> {
    constructor(props:{}){
        super(props);
        this.state ={
            studentList:["Toán","Văn","Anh","Hóa","Sinh"]
        }
    }
  render() {
    return (
      <div>
        <h1>Bài tập 1</h1>
        <h3>Danh sách môn học</h3>
        <div>
            {this.state.studentList.map((item,index)=>(
                <div key={index}>{item}</div>
            ))}
        </div>
      </div>
    )
  }
}
