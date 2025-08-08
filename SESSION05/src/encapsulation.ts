class Student{
   public fullname:string;
   private age:number
   protected address: string
    constructor(value_fullname:string, value_age:number, address:string){
        this.fullname= value_fullname;
        this.age=value_age;
        this.address= address;
    }
    getInfo(): string{
        return `xin chào ${this.fullname}, ${this.age} tuổi!`
    }
    setAge(new_age:number){
        this.age= new_age;
    }
}
let sv1 =new Student("Lan Hồng",25,"Hn");// sv1 được gọi là 1 instance của lớp Student
// sv1.setAge(22);
// sv1.address="HCM";
console.log(sv1.getInfo());
