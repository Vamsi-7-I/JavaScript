// loops are control statements to control flow of the program
// to do some repetitive tasks

var a = "Hello World";

// initialisation,termination,increment/decrrement

for (var i = 0; i < 10; i++) {
  console.log(a);
}

// you have an array and you have to square each element of the array

var num = [2, 3, 4, 5, 6, 7, 8];

var squaredArr = []; // empty array

for (var i = 0; i < num.length; i++) {
  squaredArr.push(num[i] * num[i]);
}

console.log(squaredArr);
