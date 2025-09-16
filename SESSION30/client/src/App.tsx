import { useEffect, useState } from "react"
import Loading from "./components/Loading"
import axios from "axios";
interface User{
  id:number,
  name:string,
  email:string,
  age:number
}
export default function App() {
  const [loading, setLoading]= useState<boolean>(true);
  const [users, setUsers]= useState<User[]>([]);
  // function lấy dữ liệu từ server
  async function getAllUser(){
     let result:User[];
      try {
        const response= await axios.get("http://localhost:8080/users");
        // setUsers([...response.data])
        result = response.data;
      } catch (error) {
        
      }finally{
        // hoàn thành quá trình
        setTimeout(() => {
          setLoading(false);
          setUsers([...result])
        }, 1500);
      }
   }
   useEffect(()=>{
     getAllUser();
   },[])
  return (
    <div>
      {loading? <Loading></Loading>:""}
      <h1> HỌC API!</h1>
      <ul>
        {users.map((user:User, index:number)=>{
          return <li key={index}>{user.name}</li>
        })}
      </ul>
    </div>
  )
}
