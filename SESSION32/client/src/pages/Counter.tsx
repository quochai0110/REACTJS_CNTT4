import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    const result:any= useSelector((data:any)=>{
        console.log("data",data);  
        return data.counter
    })
    const dispatch= useDispatch();
    const increase=()=>{
            dispatch({
                type:"INCREMENT"
            })
    }
  return (
    <div>
       <h1> ỨNG DỤNG COUNTER!</h1>
       <p> giá trị counter: {result.count} </p>
        <button onClick={increase}>tăng</button>
        <button>giảm</button>
    </div>
  )
}
