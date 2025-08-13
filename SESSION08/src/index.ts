// generic
// giúp viết mã linh hoạt, tái sử dụng cao

function generic<T>(param:T):T{
        return param
}
generic("1");
generic(1);
generic(true);

// 1: kiểu mảng
let numbers: number[]=[ 1,2,3,4,5];
let numbers1: Array<number>= [3,5,7,9];
let studentName : Array<string>=["hoa","hồng","nhung"];
// 2: Kiểu Record (mô tả kiểu dữ liệu của key và value)
const user_info :Record<string,string|number>={
    name:"nhung",
    age:20
}
// 3. Kiểu partial (kiểu tùy chọn, lựa chọn);
interface Contact{
    email:string;
    phone:string
}
const partitalUser:Partial<Contact>={
    email:"hoa@mail.com",
}
// 4: kiểu Readonly: chỉ đọc, hiển thị không được cập nhật, chỉnh sửa
interface Score{
    math:number,
    physic:number
}
const score1: Readonly<Score>={
    math:10,
    physic:5,
}
// score1.math=11;
// 5. Pick : tùy chọn 

interface User{
    id:string,
    name:string,
    email:string,
    address:string,
    salary:string,

}
let user1:Pick<User,"name"|"address"|"id">={
    name:"hoa",
    address:"hà nội ",
    id:"11"
}
// Omit loại bỏ một số key không cần thiết 
let user2: Omit<User,"salary">={
    id:"001",
    name:"hoa",
    email:"hoa@gmail.com",
    address:"HN"
}
