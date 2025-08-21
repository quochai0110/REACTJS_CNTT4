import React, { Component } from "react";
import Controll from "./components/Controll";
import AddProduct from "./components/AddProduct";
type InitialState={
  fullName:string
}
export default class App extends Component<{},InitialState> {
  /* 
    LifeCycle : Class component
    1. mount 
    2. update
    3. unmount

    Form

  */
  constructor(props: {}) {
    super(props);
    this.state={
      fullName:"Hồng Vân"
    }
  }
  componentDidMount(): void {
    console.log("component dismount được gọi");
    // nơi thường dùng để call API lấy data để đưa vào DOM
    
  }
  changeName=()=>{
    this.setState({fullName:"Minh Huyền"});
  }
  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<InitialState>, nextContext: any): boolean {
    console.log("shouldComponentUpdate được gọi");
    return true
    
  }
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<InitialState>, snapshot?: any): void {
    console.log("componentDidUpdate");
    
  }
  componentWillUnmount(): void {
    // Khi mà component bị remove khỏi DOM;
  }
  render() {
    // console.log("component render lần đầu");
    console.log("component re-render");
    
    
    return <div>
      Class component
      <p>Tên SV : {this.state.fullName}</p>
      <button onClick={this.changeName}>changeName</button>
      <hr />
      <Controll></Controll>
      <hr />
      <AddProduct></AddProduct>

    </div>;
  }
}
