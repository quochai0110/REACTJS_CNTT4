/* 
    ớp Animal (abstract class):

Thuộc tính:
name: Tên của động vật (public).
Phương thức:
makeNoise(): Phương thức abstract phải được định nghĩa lại trong các lớp con.
printName(): Phương thức in ra tên của đối tượng động vật (ví dụ: in name ra màn hình).
Lớp Cat và Dog:

Cả hai lớp này kế thừa từ lớp Animal.
Cài đặt phương thức makeNoise() cho mỗi lớp:
Lớp Cat: In ra "meo meo".
Lớp Dog: In ra "gâu gâu".
Yêu cầu:

Tạo đối tượng từ lớp Cat và Dog, sau đó gọi các phương thức:
printName() để in tên của đối tượng.
makeNoise() để in tiếng kêu của động vật.
*/
abstract class Animal{
public name:string;
constructor(name:string){
    this.name=name;
}

public abstract makeNoise():void;
printName():void{
    console.log(`Tên con vật là ${this.name}`);
    
}
}
class Cat extends Animal{
    public makeNoise(): void {
        console.log(`Meo meo`);
        
    }
}
class Dog extends Animal{
    constructor(name:string){
        super(name);
    }
    public makeNoise(): void {
        console.log(`${this.name} gow gow`);
        
    }
}


let minSan = new Dog("Cún");
minSan.makeNoise();
let huySan = new Cat("Mèo");
huySan.makeNoise();

