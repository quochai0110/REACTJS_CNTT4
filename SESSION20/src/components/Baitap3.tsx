import React, { useEffect } from 'react'

export default function Baitap3() {
    useEffect(()=>{
        console.log("Component đã được render lần đầu");
    },[])
  return (
    <div>
      <h1>Bài tập 3</h1>
      <div>Chào mừng đến với ứng dụng của tôi</div>
    </div>
  )
}
