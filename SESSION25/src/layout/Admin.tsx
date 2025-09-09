import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
      Trang quản lý
      <NavLink to="/admin/user">Quản lý người dùng</NavLink>
      <NavLink to="/admin/product">Quản lý sản phẩm </NavLink>
      <NavLink to="/admin/order">Quản lý hóa đơn</NavLink>
      <div className="header">
        phần đầu
      </div> <hr />
      <Outlet></Outlet> <hr />
      <div className="footer"> 
        phần chân trang
      </div>
    </div>
  )
}
