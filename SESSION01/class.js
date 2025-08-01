// HÀM TẠO CONSTUCTOR
function Student(name,age){
    this.name=name;
    this.age=age;


}
let sv1= new Student("minh thu",20);
// console.log(sv1);


class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
        // this.sayHi=()=>{
        //     console.log("nói chuyện");
            
        // }
    }
    sayHi(){
        console.log("nói chuyện");
        
    }
}
let p1= new Person("hồng vân",20);
let p2= new Person("minh thu",20);
console.log(111111,p1.sayHi== p2.sayHi);

console.log("p1",p1.sayHi());

