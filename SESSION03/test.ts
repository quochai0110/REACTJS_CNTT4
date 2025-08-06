/* 
Các kiểu dữ liệu trong TS
I_ CÁC KIỂU CƠ BẢN
*/
// kiểu number
let age:number= 20;

// kiểu dữ liệu string
let fullName:string="Phạm Lan Hồng";

// kiểu dữ liệu boolean
let isLogin:boolean=true;

// kiểu void : hàm không trả về giá trị

function print():void {
    console.log("hiển thị ...");
}
// Kiểu mảng
 let student : string[]= ["hoa","hồng"];
 let students : Array<string>=["thu","ngọc"];

 // kiểu object

 let obj:{name:string,address:string,age:number} ={
    name:"Minh Thu",
    address:"Hà Nội",
    age:23
 }

// kiểu tuple 
 let personInfo : [string, number, string]=["đạt",20,"hà nội"];
