import React, { useRef } from 'react'

export default function UseRef() {
    const _useRef= useRef(1);
    console.log(1111, _useRef);
    const increase=()=>{
        _useRef.current= _useRef.current+1;
        // console.log(_useRef.current);
        
    }
  return (
    <div>
      <h1>Học useRef </h1>
      <p>giá trị count :{_useRef.current}</p>
      <button onClick={increase}>tăng </button>
    </div>
  )
}
