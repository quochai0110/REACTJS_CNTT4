// BÀI TẬP 1
/* 
class Employee có thuộc tính:
name: Tên nhân viên, có phạm vi truy cập là public.
company: Tên công ty, có phạm vi truy cập là protected.
phone: Số điện thoại, có phạm vi truy cập là private.
Phương thức:
printInfo(): In ra tất cả các thuộc tính của lớp Employee 
(bao gồm name, company, phone).
class Manager:
Lớp con kế thừa từ Employee.
Thêm thuộc tính mới teamSize: Số lượng thành viên.
Phương thức:
printInfo(): Ghi đè phương thức printInfo()
 từ lớp Employee để in thêm thông tin về teamSize cùng với các thông tin từ lớp cha.
*/
class Employee{
    name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string){
        this.name=name;
        this.company=company;
        this.phone=phone;
    }
    getPhone(){
        return this.phone;
    }
    printInfo(){
        console.log(`name: ${this.name}, company: ${this.company}, phone: ${this.phone}`);
    }
}
class Manager extends Employee{
    teamSize: number;

    constructor(name: string, company: string, phone: string, teamSize: number){
        super(name, company, phone);
        this.teamSize=teamSize;
    }
    printInfo(): void {
        console.log(`name: ${this.name}, company: ${this.company}, phone: ${this.getPhone()}, teamSize: ${this.teamSize}`);
    }
}
let manager = new Manager("nguyen van a", "cong ty", "0987654321", 5);
manager.printInfo();