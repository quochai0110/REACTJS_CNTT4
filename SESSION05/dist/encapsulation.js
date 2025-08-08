class Student {
    constructor(value_fullname, value_age, address) {
        this.fullname = value_fullname;
        this.age = value_age;
        this.address = address;
    }
    getInfo() {
        return `xin chào ${this.fullname}, ${this.age} tuổi!`;
    }
    setAge(new_age) {
        this.age = new_age;
    }
}
let sv1 = new Student("Lan Hồng", 25, "Hn"); // sv1 được gọi là 1 instance của lớp Student
// sv1.setAge(22);
// sv1.address="HCM";
console.log(sv1.getInfo());
