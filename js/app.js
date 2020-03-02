function startCal() {
    let num = +prompt("Nhập vào số cần tính giai thừa");
    document.getElementById('num-input').innerHTML = "Số cần tính giai thừa là: " + num;
    document.getElementById('result').innerHTML = "Kết quả là: " + factorialCal(num);
}

function factorialCal(number) {
    let result = 1;
    while (number > 0) {
        result *= number;
        number--;
    }
    return result;
}