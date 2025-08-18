// TRIỂN KHAI CÁC LỚP.
// 1. Lớp khá giả (Audience)
class Audience {
    constructor(name, email, phone) {
        this.id = Audience.counter++;
        this.name = name;
        this.phone = phone;
    }
    getDetail() {
        return `THông tin khán giả_ Tên: ${this.name}, email: ${this.name}...`;
    }
}
Audience.counter = 1;
// 2. Lớp phim
class Movie {
    constructor(title, genre, ticketPrice) {
        this.isShowing = false; // phim có được công chiếu hay không?
        this.id = Movie.counter++;
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
    }
    // Các phương thức
    startShow() {
        this.isShowing = true;
    }
    stopShow() {
        this.isShowing = false;
    }
}
Movie.counter = 1;
// 3. Tạo các lớp con kế thừa lớp cha
class ActionMovie extends Movie {
    calculateTicketCost(quantity) {
        return this.ticketPrice * quantity;
    }
    getSpecialOffers() {
        return ["miễn phí bắp rang", "tặng poster"];
    }
    getMovieInfo() {
        return `Tên phim: ${this.title}, giá vé: ${this.ticketPrice} hành động gay cấn...`;
    }
}
class ComedyMovie extends Movie {
    calculateTicketCost(quantity) {
        let root_price = this.ticketPrice;
        return quantity > 4 ? root_price * 0.9 * quantity : root_price * quantity;
    }
    getSpecialOffers() {
        return ["Giảm 10% cho nhóm trên 4 người"];
    }
    getMovieInfo() {
        return `Tên phim: ${this.title}, giá vé: ${this.ticketPrice} phim hài nhẹ nhàng...`;
    }
}
class AnimationMovie extends Movie {
    calculateTicketCost(quantity) {
        // kiểm tra nếu tuổi <12 thì không thu tiền
        return this.ticketPrice * quantity;
    }
    getSpecialOffers() {
        return ["miễn phí cho trẻ em dưới 12 tuổi"];
    }
    getMovieInfo() {
        return `Tên phim: ${this.title}, giá vé: ${this.ticketPrice} hình ảnh sống động...`;
    }
}
// 4. Lớp TicketBooking 
class TicketBooking {
    constructor(audience, movie, quantity, totalPrice) {
        this.bookingId = TicketBooking.counter++;
        this.audience = audience;
        this.movie = movie;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
    getDetail() {
        return `Thông tin đặt vé: ...`;
    }
}
TicketBooking.counter = 1;
// 5. Lớp cinema 
class Cinema {
    // Triển khai các phương thức
    // 1. Thêm khán giả.
    addAudience(name, email, phone) {
        let newAudience = new Audience(name, email, phone);
        this.audiences.push(newAudience);
        return newAudience;
    }
    // 2. Thêm phim mới.
    addMovie(movie) {
        this.movies.push(movie); // Thêm phim mới
    }
    // 3. Đặt vé
    bookTickets(audienceId, movieId, quantity) {
        // Kiểm tra xem tồn tại id khách hàng, id phim
        let findAudienceById = this.audiences.find(item => item.id === audienceId);
        let findMovieById = this.movies.find(item => item.id == movieId);
        if (findAudienceById && findMovieById && quantity > 0 && findMovieById.isShowing) {
            let newBooking = new TicketBooking(findAudienceById, findMovieById, quantity, findMovieById.calculateTicketCost(quantity));
            this.bookings.push(newBooking);
            return newBooking;
        }
        return null;
    }
}
