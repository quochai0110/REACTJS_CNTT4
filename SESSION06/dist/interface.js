// giống như bản hợp hồng và các class khác khi triển khai phải tuân theo
const book1 = {
    bookId: 1,
    bookName: "hoa vàng"
};
class A {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getInfo() {
        return ` Thông tin sản phẩm: Tên_ ${this.name} , giá_ ${this.price}`;
    }
}
