import React, { useReducer } from "react";

export default function Baitap7() {
  let initial = {
    count: 0,
  };
  let countReducer = (state1: any, action: any) => {
    switch (action.type) {
      case "Click_increase":
        return { count: state1.count + action.payload };
      case "Click_decrease":
        return { count: state1.count - action.payload };
    }
  };
  let [state, dispatch] = useReducer(countReducer, initial);
  let handleClickIncrease = () => {
    dispatch({ type: "Click_increase", payload: 1 });
  };
  let handleClickDecrease = () => {
    dispatch({ type: "Click_decrease", payload: 1 });
  };
  return (
    <div>
      <h1>BÀI TẬP 7</h1>
      <h2>Số đếm:{state?.count} </h2>
      <button onClick={handleClickIncrease}>Tăng</button>
      <button onClick={handleClickDecrease}>Giảm</button>
    </div>
  );
}
