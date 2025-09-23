import type { Student } from "../utils/types";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import Toolbar from "../components/Toolbar";
import { useState } from "react";
import { useSelector } from "react-redux";

const StudentManagement = () => {
  const [toggle, setToggle] = useState<string>("OFF");
  const students = useSelector((store: any) => {
    console.log("111", store);
    return store.student;
  });
  const handleAddStudent = (student: Student) => {
    // setStudents([...students, student]);
  };

  const handleSearch = (keyword: string) => {
    // setStudents((prev) =>
    //   prev.filter((s) => s.name.toLowerCase().includes(keyword.toLowerCase())),
    // );
  };
  const isShow = (flag: string) => {
    setToggle(flag);
  };

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar isShow={isShow} onSearch={handleSearch} />
        <StudentList students={students} />
      </div>
      <StudentForm toggle={toggle} isClose = {isShow} onSubmit={handleAddStudent} />
    </div>
  );
};

export default StudentManagement;
