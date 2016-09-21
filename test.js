


function add(num1, num2) {
    return num1 + num2;
}


function asyncAdd(n1, n2) {
    var a = n1;
    var b = n2;
    setTimeout(function () {
        return a + b;
    }, 1000);
}


function abc(a, b) {
    var sum = 0;
    if (a > b) {
        sum = a + 1;
    } else {
        sum = b + 1;
    }
    return sum;
}

function t1(a, b) {
    const aaaa = 1;
    return a - b;
}


exports.add = add;
exports.asyncAdd = asyncAdd;
exports.abc = abc;
console.log('start');