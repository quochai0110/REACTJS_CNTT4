import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { Data } from "../utils/types";
import { increment } from "../store/slices/counterSlice";

export default function Counter() {
  const result = useSelector((data: any) => {
    return data.counter.value;
  });
  const dispatch= useDispatch();
  // hàm tăng giá trị count
  const increase=()=>{
        dispatch(increment());
        
  }
  return (
    <div>
      giá trị counter: {result}
      <br />
      <button onClick={increase}>tăng</button>
      <button>giảm</button>
    </div>
  );
}
