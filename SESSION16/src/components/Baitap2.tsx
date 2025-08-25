import React, { Component } from 'react'

type State={
    isLoggedIn:boolean,
}
export default class Baitap2 extends Component<object,State> {
    constructor(props:object){
        super(props);
        this.state={
            isLoggedIn:false
        }
    }
    handleClick=()=>{
        this.setState({isLoggedIn:!this.state.isLoggedIn})
    }
  render() {
    return (
      <div>
        <h1>Bài tập 2</h1>
        <p>{this.state.isLoggedIn?"Xin chào User":"Vui Lòng Đăng Nhập để tiếp tục"}</p>
        <button onClick={this.handleClick}>{this.state.isLoggedIn?"Đăng Xuất":"Đăng Nhập"}</button>
      </div>
    )
  }
}
