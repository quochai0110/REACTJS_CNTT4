// Mảng chứa danh sách sinh viên
let students = [];
// Tạo hàm thêm thông tin sinh viên
function addStudent(id, name, age, subject) {
    const newStudent = {
        id: id,
        name: name,
        age: age,
        subject: subject
    };
    students.push(newStudent);
}
addStudent(1, "hồng", 20, [{ subjectName: "C", score: 8 }, { subjectName: "CTDL&GT", score: 9 }]);
addStudent(2, "huy", 20, [{ subjectName: "C", score: 7 }]);
// Hàm hiển thị thông tin sinh viên
function printStudent() {
    for (let i = 0; i < students.length; i++) {
        console.log(`Thông tin sinh viên thứ ${i + 1} : Name_ ${students[i].name}...`);
    }
}
// hàm cập nhật sinh viên
function updateStudent(id) {
    // kiểm tra xem id có tồn tại hay không?
}
// hàm xóa sinh viên 
function deleteStudent(id) {
    // kiểm tra id có tồn tại hay không? rồi xác nhận xóa!
}
