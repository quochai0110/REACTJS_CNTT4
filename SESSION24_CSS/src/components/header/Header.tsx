import React from "react";
import "./header.scss"
export default function Header() {
  return (
    <div className="container">
      Phần đầu trang
      <div className="logo">
        <h1>phần logo cửa hàng!</h1>
      </div>
      <nav>
        <h2> các thanh điều hướng!</h2>
      </nav>
      <div className="info">
        <div className="login"></div>
        <h2> phần thông tin người dùng!</h2>
      </div>
    </div>
  );
}
