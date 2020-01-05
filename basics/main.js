// function isEven(num) {
//     if (num % 2 === 0){
//         return true;
//     }
//     else {return false;}
// }

function isEven(num) {
    return num % 2 === 0;
}

function factorial(num) {
    var result = 1;
    for (i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

function kebabToSnake(str) {
    for (i = 0; i < str.length; i++) {
        str = str.replace("-", "_");
    }
    return str;
}

function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

function isUniform(arr) {
    var fir = arr[0];
    for (var i = 1; i < arr.length; i++) {

        if (arr[i] !== fir) {
            return false;
        }
    }
    return true;
}

// function sumArray(num) {
//     var result = 0
//     for (i = 0; i < num.length; i++) {
//         result = result + num[i];
//     }
//     console.log(result);
// }

function sumArray(num) {
    var result = 0
    num.forEach(function (element) {
        result += element
    });
    return result;
}

function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}