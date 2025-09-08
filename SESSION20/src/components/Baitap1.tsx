import React, { useState } from 'react'

export default function Baitap1() {
    const [mess,setMess]=useState<string>("");
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const length=e.target.value.length;
        if(length>5){
            setMess("Do dai cua chuoi lon hon 5")
        }else{
            setMess("");
        }
    }
  return (
    <div>
      <h1>Bài tập 1</h1>
      <h2>Kiem tra do dai cua chuoi nhap vao</h2>
      <input type="text" placeholder='Nhap vao day' onChange={handleChange}/>
      <p style={{color:"red"}}>{mess}</p>
    </div>
  )
}
