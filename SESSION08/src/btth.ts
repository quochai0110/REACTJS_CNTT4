// Bước 1: Tạo lớp Book
class Book {
    id: number // mã sách
    title:string // tên sách
    author: string // tên tác giả
    year: number // năm phát hành sách
    constructor(id:number, title:string, author:string, year:number){
        this.id=id;
        this.title=title;
        this.author= author;
        this.year= year;

    }
}
// Bước 2: Tạo lớp thư viện Library 
class Library <T extends {id:number,name:string, author :string}>{
    // Tạo mảng chứa các quyển sách trong thư viện
    books : T[]=[];
    // Định nghĩa các phương thức: 
    // 1. thêm sách vào thư viện 
    addBook(book:T):void{
        this.books.push(book);
    }
    // 2. Tìm sách theo id (nếu có trả về sách, không có trả về undefined)
    getBookById(id:number):T|undefined{
        return this.books.find(item=>item.id===id);
    }
    // 3. Xóa sách khỏi thư viện theo id
    removeBookById(id:number):void{
        let index= this.books.findIndex(item=>item.id==id);
        if(index==-1){
            console.log("không có sách trong thư viện");   
        }else{
            let confirmDelete= confirm(`bạn có muốn xóa sách: ${this.books[index].name} hay không`);
            if(confirmDelete){
                this.books.splice(index,1);
            }
        }
    }
    // 4. Cập nhật thông tin sách
    updateBook(id:number, new_book:T):void{
        const bookIndex=this.books.findIndex(item=>item.id==id);
        if (bookIndex==-1) {
            console.log("không có sách trong thư viện");   
        }else{
            let confirmUpdate= confirm(`bạn có muốn sửa thông tin sách: ${this.books[bookIndex].name} hay không`);
            if(confirmUpdate){
                this.books[bookIndex]=new_book;
                console.log("update thông tin mới thành công");
            }
        }
    }
    // 5. Lấy tất cả sách trong thư viện
    // 6. Tìm sách theo tên 
    findBooksByTitleOrAuthor(searchTerm: string): T[] {
        return this.books.filter(item =>
            item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())||
            item.author.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        )

    }

}
// Bước 3: Viết các hàm triển khai ứng dụng