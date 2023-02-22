let raqam = +prompt("raqamni factorialini aniqlash")
let num = 1

for (i = 1; i <= raqam; i++) {
    num = num * i
}
console.log(raqam + ' ni factoriali ' + num);
// 
// 
let no1 = +prompt('m1 = ?')
let no2 = +prompt('m2 = ?')
let no3 = +prompt('m3 = ?')

if (no1 > no2 && no1 > no3) {
    if (no2 > no3) {
       console.log('m=' + no2);
    }
    else {
        console.log('m=' + no3);
    }
}
else if (no2 > no1 && no2 > no3) {
    if (no1 > no3) {
        console.log('m=' + no1);
    }
    else {
        console.log('m=' + no3);
    }
}
else if (no3 > no1 && no3 > no2) {
    if (no1 > no2) {
        console.log('m=' + no1);
    } else {
        console.log('m=' + no2);
    }
}
// 
//
let raqam1 = +prompt("raqam darajasini aniqlah")
let num1 = +prompt('darajani yozing')

for (i = 1; i <= raqam1; i++) {
    javob = raqam1 ** num1
}
console.log(raqam1 + ' ni darajasi ' + javob);