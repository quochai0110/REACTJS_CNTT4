import React, { Component } from "react";
import Baitap1 from "./components/Baitap1";
import Baitap2 from "./components/Baitap2";
import Baitap3 from "./components/Baitap3";
import Baitap4 from "./components/Baitap4";
import Baitap9 from "./components/Baitap9";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>LUYỆN TẬP SESSION15</h1>
        <Baitap1></Baitap1> 
        <hr />
        <Baitap2></Baitap2>
        <hr />
        <Baitap3></Baitap3>
         <hr />
         <Baitap4></Baitap4>
         <hr />
         <Baitap9></Baitap9>
      </div>
    );
  }
}
