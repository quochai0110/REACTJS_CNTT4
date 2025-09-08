import React, { useEffect, useState } from 'react'

export default function Baitap4() {
    const [title,setTitle] = useState('');
    useEffect (()=>{
        document.title = title;
        return ()=>{
            // clear interval... tránh trường hợp khi component bị unmount khỏi dom
        }
    })
  return (
    <div>
      <h1>Bài tập 4</h1>
      <div>Chào mừng ban đến với trang của chúng tôi</div>
      <input type="text" placeholder='Nhập tên của bạn' onChange={(e)=> setTitle(e.target.value)}/>
      <p>Tiêu đề trang sẽ thay đổi khi bạn nhập tên vào trường tên trên</p>
    </div>
  )
}
