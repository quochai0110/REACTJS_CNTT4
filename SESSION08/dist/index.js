// generic
// giúp viết mã linh hoạt, tái sử dụng cao
function generic(param) {
    return param;
}
generic("1");
generic(1);
generic(true);
// 1: kiểu mảng
let numbers = [1, 2, 3, 4, 5];
let numbers1 = [3, 5, 7, 9];
let studentName = ["hoa", "hồng", "nhung"];
// 2: Kiểu Record (mô tả kiểu dữ liệu của key và value)
const user_info = {
    name: "nhung",
    age: 20
};
const partitalUser = {
    email: "hoa@mail.com",
};
const score1 = {
    math: 10,
    physic: 5,
};
let user1 = {
    name: "hoa",
    address: "hà nội ",
    id: "11"
};
// Omit loại bỏ một số key không cần thiết 
let user2 = {
    id: "001",
    name: "hoa",
    email: "hoa@gmail.com",
    address: "HN"
};
