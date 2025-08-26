import React, { useState } from "react";

export default function UseState() {
  // destructoring
  //  return [1, hàm mới dùng để cập nhật giá trị]
  //  const numbers:number[]= [1,2,3,4,5];
  //  const [a,b,c,d,e]= numbers;
  const a = useState<number>(100);
//   console.log("giá trị a", a);
  const [number, setNumber]=a;
  const [name,setName]= useState<string>("Minh Thu");
  const [count,setCount] =useState<number>(1);
  const changeName=()=>{
        setName("Hồng Vân");
 }
 const increase=()=>{
    setCount(count+1);
 }
//  console.log("component-re_render");
 
  return <div>
     <p>tên sinh viên : {name}</p>
     <button onClick={changeName}>changeName</button>
     <p>giá trị count : {count}</p>
     <button onClick={increase}>tăng</button>
  </div>;
}
