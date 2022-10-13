// bai 1: tính tiền lương
var salary = 100000;
var days = 30;
var salaryOneMonth = salary * days;

// bai 2: tính giá trị trung bình
var num1 = 1;
var num2 = 2;
var num3 = 3;
var num4 = 4;
var num5 = 5;

var averageNumber = (num1 + num2 + num3 + num4 + num5) / 5;

// bài 3 : quy dổi tiền

var inputUSD = 100;
var rateToVND = 23500;

var outputVND = inputUSD * rateToVND;

// bài 4: tính S, C hinh nhu nhat

var chieuDai = 10;
var chieuRong = 6;

var dienTich = chieuDai * chieuRong;
var chuVi = ( chieuDai + chieuRong) * 2;

//  bài 5: tổng 2 kí số

var inputNumber = 54;

var so_hang_chuc = Math.floor(inputNumber / 10);
var so_hang_dv = inputNumber % 10;

var tong_ki_so = so_hang_chuc + so_hang_dv;
console.log(tong_ki_so)