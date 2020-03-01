function startCal() {
    let num = +prompt("Nhập vào số cần tính giai thừa");
    document.getElementById('num-input').innerHTML = "Số cần tính giai thừa là: " + num;
    let result = 1;
    while (num > 0) {
        result *=  num;
        num--;
    }
    document.getElementById('result').innerHTML = "Kết quả là: " + result;
}