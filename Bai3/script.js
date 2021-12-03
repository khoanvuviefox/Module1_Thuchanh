let str = prompt("Nhập vào một chuỗi bất kỳ");

if (str.length > 0) {
    let stringToArray = Array.from(str.toLowerCase());
    let result = lettersAreVowels(stringToArray);
    if (result) {
        document.write("Số ký tự nguyên âm: ", result[0]);
        document.write("<br>Ký tự nguyên âm trong chuỗi: ", result[1]);
    } else {
        document.write("Không tìm thấy ký tự nguyên âm nào!");
    }
} else {
    document.write("Bạn chưa nhập chuỗi. Vui lòng thử lại!");
}

function lettersAreVowels(array) {
    let counter = 0,
        result = [];
    array.forEach(function(element, index) {
        if (element === 'a' || element === 'e' || element === 'o' || element === 'i' || element === 'u') {
            array[index] = "<span class=\"highlight-text\">" + element + "</span>";
            counter++;
        }
    });
    result.push(counter);
    result.push(array.join(""));
    return (counter > 0) ? result : false;
}