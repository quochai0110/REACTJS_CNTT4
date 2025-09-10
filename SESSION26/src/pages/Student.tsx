// import React from 'react'

import { useState, type ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

export default function Student() {
  const [studentName, setStudentName] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStudentName(e.target.value);
  };
  const [searchName, setSearchParamName] = useSearchParams();

  const handleClick = () => {
    // setSearchParamName truyền dữ liệu lên thanh URL
    setSearchParamName({
      name1: studentName,
      age: "18",
    });
  };
  return (
    <div>
      Trang học sinh
      <input
        type="text"
        placeholder="nhập tên sinh viên"
        onChange={handleChange}
      />
      <button onClick={handleClick}>tìm kiếm!</button>
      <p> giá trị vừa tìm kiếm: {searchName.get("name1")} </p>
    </div>
  );
}
