import React, { useState, type ChangeEvent } from "react";
;
import "./app.scss";
type Payment={
  id:number,
  name:string,
  price:number,
  status:boolean
}
export default function App() {
  const [datas, setDatas] = useState<Payment[]>([]);
  const [data, setDate] = useState<Payment>({
    id: 1,
    name: "",
    price: 0,
    status: false,
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDatas([...datas,{...data,id:datas.length?datas[datas.length-1].id+1 :1}]);
  };
  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    const {name, value}= e.target;

     setDate({...data,[name]:value});

  }
  console.log("mảng danh sách các hóa đơn", datas);
  
  return (
    <div className="container">
      {/* <Header></Header>
      <Main></Main>
      <Footer></Footer> */}
      <div className="title">
        <h1>Quản lý hóa đơn tiền điện</h1>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <h2>form nhập dữ liệu</h2>
        <input placeholder="nhập tên chủ hộ"
         onChange={handleChange}
         type="text"
         name="name"
          />
        <input placeholder="giá tiền"
         onChange={handleChange}
         type="text"
         name="price"
          />
        <button>Thêm</button>
      </form>
      Danh sách hóa đơn
      <table border={1}>
      
        <thead>
            <tr>
              <th>Tên chủ hộ</th>
              <th>Số tiền</th>
              <th>Trạng thái</th>
              <th>Hành động </th>
            </tr>
        </thead>
        <tbody>
              {datas.map((item:Payment, index:number)=>{
                return <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>1</td>
                    <td>
                      <button>sửa</button>
                      <button>xóa</button>
                    </td>
                </tr>
              })}
        </tbody>
      </table>
      <ul className="pagination">
        <li>Phần phân trang!</li>
      </ul>
    </div>
  );
}
