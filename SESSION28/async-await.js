function getDataFromAPI1() {
  return new Promise((res, reject) => {
    setTimeout(() => {
      console.log("lấy dữ liệu từ API1 tải lên giao diện thành công");
      res();
    }, 2000);
  });
}
function getDataFromAPI2() {
  return new Promise((res, reject) => {
    setTimeout(() => {
      console.log("lấy dữ liệu từ API2 tải lên giao diện thành công");
      res();
    }, 2000);
  });
}
function getDataFromAPI3() {
  return new Promise((res, reject) => {
    setTimeout(() => {
      console.log("lấy dữ liệu từ API3 tải lên giao diện thành công");
      res();
    }, 2000);
  });
}
 async function runAllTask() {
    try {
        await getDataFromAPI1();
        await getDataFromAPI2();
        await getDataFromAPI3(); 
    } catch (error) {
        console.log("error",error); 
    }
}
runAllTask();
