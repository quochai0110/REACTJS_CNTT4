// TÍNH KẾ THỪA
// 1 CLASS khi kế thừa CLASS cha thì sẽ có các thuộc tính và phương thức của class cha
class Animal {
    constructor(name) {
        this.name = name;
    }
    sound() {
        return `tiếng kêu của: ${this.name}`;
    }
}
class Dog extends Animal {
    sound() {
        return `${this.name} sủa gâu gâu!`;
    }
}
class Cat extends Animal {
    sound() {
        return `${this.name} kêu meo meo!`;
    }
}
const dog1 = new Dog("chó");
const cat1 = new Cat("mèo");
console.log(dog1.sound());
console.log(cat1.sound());
