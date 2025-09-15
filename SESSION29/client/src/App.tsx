import axios from 'axios'
import React, { useEffect, useState } from 'react'
type User={
  id:number,
  name:string,
}
export default function App() {
  const [users,setUsers]= useState<any>([]);

 async function getData() {
    let res= await  axios.get("http://localhost:8080/users");
   console.log("res",res);
    setUsers([...res.data]);
  }
  useEffect(()=>{
     getData();
  },[])
  return (
    <div>
      học API
     <ul>
       {users.map((item:any,index:number)=>{
          return <li key={index}> {item.name}</li>
      })}
     </ul>
    </div>
  )
}
