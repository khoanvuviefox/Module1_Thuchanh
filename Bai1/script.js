var a;
a = prompt("Nhập a:");
var b;
b = prompt("Nhập b:");
if (a == 0) {
    if (b == 0) {
        document.write("Phương trình vô số nghiệm");
    } else {
        document.write("Phương trình vô nghiệm");
    }
} else {
    document.write("Nghiệm x= " + (-b / a));
}