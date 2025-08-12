/*
    Class Vehicle:
Thuộc tính:
name: Tên phương tiện (protected).
speed: Tốc độ của phương tiện (protected).
id: Mã định danh của phương tiện (protected).
Phương thức:
slowDown(): Phương thức để giảm tốc độ.
speedUp(): Phương thức để tăng tốc độ.
showSpeed(): Phương thức để in ra tốc độ hiện tại.
Class Bicycle:
Lớp Bicycle kế thừa từ Vehicle.
Thêm thuộc tính:
gear: Số bánh răng của xe đạp (private).
Tạo phương thức:
showInfo(): In ra tất cả thông tin của xe đạp,
bao gồm thông tin từ lớp Vehicle và thêm thuộc tính gear.
Yêu cầu:
Tạo một đối tượng từ lớp Bicycle, sau đó tiến hành gọi các phương thức speedUp(),
 slowDown(), và showSpeed() để thay đổi tốc độ và in kết quả.
In ra thông tin của đối tượng Bicycle với phương thức showInfo().

*/
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        if (this.speed < 0) {
            return `Không thể giảm tốc độ`;
        }
        this.speed -= 10;
        return `GiAM TOC DOO THANH CONG, TOC DO HIEN TAI ${this.speed}`;
    }
    speedUp() {
        if (this.speed > 150) {
            return `Tốc độ đã max, không thể tăng thêm!`;
        }
        this.speed += 10;
        return `Tăng tốc độ thành công!`;
    }
    showSpeed() {
        return `Toc do hien tai la ${this.speed}`;
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        return `Name: ${this.name}, speed: ${this.speed}, id: ${this.id}, gear: ${this.gear}`;
    }
}
console.log(window);
// const list = new Vehicle("Oto", 50, 123);
// console.log(list.slowDown());
// console.log(list.speedUp());
// console.log(list.showSpeed());
