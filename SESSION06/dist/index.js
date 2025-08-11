//OOP
class Animal1 {
    //abstract ...
    move() {
        console.log("phương thức di chuyển");
    }
}
class Cat extends Animal1 {
    // bắt buộc phải đi triển khai method astract 
    makeSound() {
        return ` tiếng kêu của mèo ,meo meo!`;
    }
}
