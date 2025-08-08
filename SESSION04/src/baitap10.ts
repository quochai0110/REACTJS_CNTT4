// khai báo các type
// 1. Sinh viên

type Student={
    readonly studentId: string,
    name:string,
    email:string,
    hasCompleted:boolean,
    finalSroce?:number
}
// 2. Khóa học
type Course={
    courseId:string,
    title:string,
    instructor:string,
    student:Student[],
    isActive:boolean
}
// 3. Quản lý khóa học
type CourseManager={
    schollName:string,
    year:number,
    courses:Course[],
}
// fix data của sinh viên
const sv1 :Student={
     studentId:"SV01" ,
    name:"Hồng Vân",
    email:"van@gmail.com",
    hasCompleted:true,
    finalSroce:50,
} 
const sv2 :Student={
     studentId:"SV02" ,
    name:"Hồng Lan",
    email:"lan@gmail.com",
    hasCompleted:true,
    finalSroce:60,
} 
// tạo data của 1 khóa học
const course1: Course= {
    courseId:"C01",
    title:"Lập trình Reactjs+ TS",
    instructor:"",
    student:[sv1,sv2],
    isActive:true
}
const course2: Course= {
    courseId:"C02",
    title:"Cấu trúc dữ liệu và giải thuật",
    instructor:"",
    student:[sv1],
    isActive:false,
}
const courseManager:CourseManager={
    schollName:"PTIT",
    year:2025,
    courses:[course1,course2],
}
// Tạo hàm trả về danh sách học viên đã hoàn thành khóa học

function getCompletedStudents(course: Course):Student[] {
    return course.student.filter((item:Student)=> item.hasCompleted);
    
}
console.log(getCompletedStudents(course1));


