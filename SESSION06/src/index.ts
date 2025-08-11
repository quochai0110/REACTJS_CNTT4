//OOP


abstract class Animal1 {

    // gồm nhiều phương thức abstract và nhiều phương trình không phải là abstract
    abstract makeSound(): void;
    //abstract ...
    move(){
        console.log("phương thức di chuyển");
        
    }
    // định nghĩa thêm nhiều phương thức riêng cho chính nó!
}
class Cat extends Animal1{
    // bắt buộc phải đi triển khai method astract 
    makeSound(): string{
        return ` tiếng kêu của mèo ,meo meo!`
    }
}
  