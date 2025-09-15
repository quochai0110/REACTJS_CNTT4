function getDataFromAPI1(callback) {
  setTimeout(() => {
    console.log("lấy data AP1 thành công");
    
    callback();
  }, 1000);
}
function getDataFromAPI2(callback) {
  setTimeout(() => {
    console.log("lấy data AP2 thành công");
    
    callback();
  }, 1000);
}
function getDataFromAPI3() {
  setTimeout(() => {
    console.log("lấy data API3 thành công");
    console.log("Tất cả dữ liệu lấy trên server thành công!");
  }, 1000);
}

function runAllTask() {
    getDataFromAPI1(()=>{
        getDataFromAPI2(()=>{
            getDataFromAPI3();
        })
    })
}
runAllTask();
