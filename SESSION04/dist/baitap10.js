// khai báo các type
// 1. Sinh viên
// fix data của sinh viên
const sv1 = {
    studentId: "SV01",
    name: "Hồng Vân",
    email: "van@gmail.com",
    hasCompleted: true,
    finalSroce: 50,
};
const sv2 = {
    studentId: "SV02",
    name: "Hồng Lan",
    email: "lan@gmail.com",
    hasCompleted: true,
    finalSroce: 60,
};
// tạo data của 1 khóa học
const course1 = {
    courseId: "C01",
    title: "Lập trình Reactjs+ TS",
    instructor: "",
    student: [sv1, sv2],
    isActive: true
};
const course2 = {
    courseId: "C02",
    title: "Cấu trúc dữ liệu và giải thuật",
    instructor: "",
    student: [sv1],
    isActive: false,
};
const courseManager = {
    schollName: "PTIT",
    year: 2025,
    courses: [course1, course2],
};
// Tạo hàm trả về danh sách học viên đã hoàn thành khóa học
function getCompletedStudents(course) {
    return course.student.filter((item) => item.hasCompleted);
}
console.log(getCompletedStudents(course1));
