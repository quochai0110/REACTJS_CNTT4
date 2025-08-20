import React, { Component } from 'react'
type Props1={
    name1:string,
    age:string
}
export default class Child extends Component<Props1> {
  render() {
    console.log("nhận về từ component cha", this.props);
    // dùng destructoring để lấy giá trị
    const {name1, age}= this.props;
    
    return (
      <div>
        Component con
        <p>giá trị fullName từ component cha : {this.props.name1}</p>
        <p>giá trị tuổi: {age}</p>
      </div>
    )
  }
}
