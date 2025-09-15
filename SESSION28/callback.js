function askForPhoneNumber(abc) {
    let phoneNumber;
    console.log("ánh gọi cho Duy xin số điện thoại của Nhung");
    console.log("Duy đợi mình tý, mình tìm số");
    setTimeout(() => {
        console.log("tìm thấy số rồi");
        phoneNumber=12345; 
        abc(phoneNumber);  
    }, 3000);
     
}
 function processPhoneNumber(sdt) {
     console.log(`anh gọi cho Nhung theo số: ${sdt}`);
     
 }
askForPhoneNumber(processPhoneNumber);