import React, { useState } from 'react'
import UseState from './components/UseState'
import UseEffect from './components/UseEffect'
import UseRef from './components/UseRef'
import Btth from './components/Btth'

export default function App() {
  /* 
  Hook là những hàm 
   + khi dùng hàm nhớ 
    1. đầu vào hàm nhận là gì.
    2. kết quả trả về của hàm.
  
  */


  return (
    <div>
      <h1>Hook</h1>
      <UseState></UseState>
      <UseEffect></UseEffect>
      <UseRef></UseRef>
      <hr />
      <Btth></Btth>
    </div>
  )
}
