abstract class Account {
  id: number;
  usedname: string;
  passwork: string;
  islogin: boolean;
  role: string;
  constructor(id: number, usedname: string, passwork: string) {
    this.id = id;
    this.usedname = usedname;
    this.passwork = passwork;
    this.islogin = true;
  }
  abstract login(): void;
  abstract logout(): void;
}

class Used extends Account {
  status: string;
  constructor(id: number, usedname: string, passwork: string) {
    super(id, usedname, passwork);
    this.role = "user";
    this.status = "active";
  }
  login(): void {
      if(this.islogin==true){
        console.log("da dang nhap roi");
      }else{
        this.islogin=true;
        console.log("da dang nhap");
      }
  }
  logout(): void {
      if(this.islogin==false){
        console.log("da dang xuat roi");
      }else{
        this.islogin=false;
        console.log("da dang xuat");
      }
  }
}


const tan = new Used(1,"vodichvutru","1234");

tan.logout();
tan.login();