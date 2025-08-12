/*

 Lớp Person (abstract class):
Thuộc tính:
name: Tên của người (public).
Phương thức:
displayInfo(): Phương thức in thông tin của đối tượng, được cài đặt trong lớp Person

Lớp Student:
Lớp con kế thừa từ lớp Person.
Thêm thuộc tính:
id: Mã sinh viên.
Phương thức:
displayInfo(): Ghi đè phương thức displayInfo() từ lớp Person để
in thông tin về mã sinh viên và tên sinh viên.

Lớp Teacher:
Lớp con kế thừa từ lớp Person.
Thêm thuộc tính:
subject: Môn học mà giáo viên giảng dạy.
Phương thức:
displayInfo(): Ghi đè phương thức displayInfo() từ lớp Person
để in thông tin về tên giáo viên và môn học.

Yêu cầu:
Tạo đối tượng từ lớp Student và lớp Teacher, sau đó gọi phương thức displayInfo() để in thông tin tương ứng:
Đối với Student: in ra id và name.
Đối với Teacher: in ra name và subject.
*/
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Tên người dùng là :${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Ma sinh vien la :${this.id}, Ten:${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = this.subject;
    }
    displayInfo() {
        console.log(`Ten giao vien :${this.name}, Mon hoc:${this.subject}`);
    }
}
const student = new Student("Nguyen Trong Nhatto", 101);
const teacher = new Teacher("Nguyen Thanh C", "Toan");
console.log(teacher.displayInfo());
console.log(student.displayInfo());
