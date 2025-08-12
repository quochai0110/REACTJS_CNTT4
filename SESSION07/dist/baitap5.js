class Account {
    constructor(id, usedname, passwork) {
        this.id = id;
        this.usedname = usedname;
        this.passwork = passwork;
        this.islogin = true;
    }
}
class Used extends Account {
    constructor(id, usedname, passwork) {
        super(id, usedname, passwork);
        this.role = "user";
        this.status = "active";
    }
    login() {
        if (this.islogin == true) {
            console.log("da dang nhap roi");
        }
        else {
            this.islogin = true;
            console.log("da dang nhap");
        }
    }
    logout() {
        if (this.islogin == false) {
            console.log("da dang xuat roi");
        }
        else {
            this.islogin = false;
            console.log("da dang xuat");
        }
    }
}
const tan = new Used(1, "vodichvutru", "1234");
tan.logout();
tan.login();
