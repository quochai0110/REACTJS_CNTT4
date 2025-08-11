// giống như bản hợp hồng và các class khác khi triển khai phải tuân theo

interface Product{
    name:string,
    price:number,
    getInfo():string
}
interface Book{
    bookId:number,
    bookName:string,
}
const book1:Book={
    bookId:1,
    bookName:"hoa vàng"
}
class A implements Product, Book{
    name: string;
    price:number;
    bookId: number;
    bookName:string;
    constructor(name:string, price:number){
        this.name=name;
        this.price=price
    }
    getInfo(): string {
        return` Thông tin sản phẩm: Tên_ ${this.name} , giá_ ${this.price}`
    }
}