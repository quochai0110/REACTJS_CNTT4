// import React from 'react'
import "./../App.css"
import { useEffect, useRef, useState } from "react"

export default function Baitap6() {
    const [isOpen,setIsOpen] = useState(false);
    const isRef = useRef<HTMLInputElement>(null);
    useEffect(()=>{
        if(isOpen){
            isRef.current?.focus()
        }
    },[isOpen])
    const handleOpen=()=>{
        setIsOpen(true);
    }
    const handleClose=()=>{
        setIsOpen(false);
    }
  return (
    <div>
      <h1> Bài tập 6</h1>
      <h1>Ứng dụng React với Modlal và Focus Input</h1>
      <button onClick={handleOpen}>Mở</button>
      {isOpen && (
        <div className="Modal">
            <h1>Đăng nhập</h1>
            <input ref={isRef} type="text" placeholder="Nhập tên người dùng"/>
            <br />
            <button onClick={handleClose}>Đóng</button>
        </div>
      )}
    </div>
  )
}
