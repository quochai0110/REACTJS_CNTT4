import React, { useState } from "react"

type State={
    name: string,
    email: string
}
export default function Baitap2() {
    const [user, setUser]=useState<State>({name: "", email: ""})
    const [visibility, setVisibility]=useState<boolean>(false)
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=e.target;
        setUser({...user, [name]: value})
    }
    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setVisibility(true)
    }
  return (
    <div>
      <h1>Bài tập 2</h1>
      <form action="" onSubmit={handleSubmit}>
        <h2>Nhap thong tin</h2>
        <input type="text" value={user.name} name="name" placeholder="nhap ten" onChange={handleChange}/> <br />
        <input type="text" value={user.email} name="email" placeholder="nhap email" onChange={handleChange}/> <br />
        <button>Gui</button>
      </form>
      <div style={{display: `${visibility ? "block" : "none"}`}}> <br />
        <div>Ten: {user.name}</div>
        <div>Email: {user.email}</div>
      </div>
    </div>
  )
}
