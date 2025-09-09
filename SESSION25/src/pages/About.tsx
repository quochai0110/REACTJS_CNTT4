import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate1= useNavigate();
    const handleLogin=()=>{
        navigate1("/admin/user");
    }
  return (
    <div>
      Trang about 
      <button onClick={handleLogin}>đi tới</button>
    </div>
  )
}
