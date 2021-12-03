let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let number = parseInt(prompt("Nhập số từ 1 đến 10"));
document.write(indexOfArrays(number, numberArray));

function indexOfArrays(num, arr) {
    if (Number.isNaN(num) || num < 1 || num > 10) {
        return "Xin lỗi! Nhập lại một sớ từ 1 đến 10";
    } else if (!Array.isArray(arr)) {
        return "Xin lỗi! Đây không phải mảng";
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === num) {
                return ("Vị trí phần tử " + i + " nằm trong mảng " + arr.toString());
            }
        }
    }
    return false;
}
