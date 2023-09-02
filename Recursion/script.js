//sumrange recursion
// function sumRange(num) {
//     if (num === 1) {
//         return 1;
//     }
//     return num + sumRange(num - 1);
// }
// console.log(sumRange(3));


// factorial recursion
// function factorial(num) {
//     if (num === 1) {
//         return 1;
//     }
//     return num * factorial(num - 1)
// }
// console.log(factorial(5))


//powerFunction recursion
// function power(base, exponential) {
//     if (exponential === 0) {
//         return 1;
//     }
//     return base * power(base, exponential - 1)
// }
// console.log(power(2, 4));

//arrayrecursion
// function all(array, callback) {
//     var copy = array.slice();  // Copy the array
//     if (copy.length === 0) return true;
//     if (callback(copy[0])) {
//         console.log(copy)
//         copy.shift();

//         return all(copy, callback);  // Recurse with the copied array
//     } else {
//         return false;
//     }
// }

// var allAreLessThanSeven = all([1, 2, 9], function (num) {
//     return num < 7;
// });

// console.log(allAreLessThanSeven);


//fibonacci series recursive

// function fibseries(num) {
//     let firstNum = 0;
//     let secondNum = 1;
//     let store = [];
//     store.push(firstNum)
//     store.push(secondNum)
//     for (let i = 0; i < num - 2; i++) {
//         let thirdNum = firstNum + secondNum;
//         firstNum = secondNum;
//         secondNum = thirdNum;
//         store.push(thirdNum)
//     }
//     return store;

// }

// function fiboSeries(num) {
//     if (num < 2) {
//         return num;
//     }
//     else {
//         return (fiboSeries(num - 1) + fiboSeries(num - 2))
//     }
// }

//funtion array product