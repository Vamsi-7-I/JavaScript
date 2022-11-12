// functions are just a block of code that performs a specific task
// to execute the function we must invoke or call it
// a function can be called multiple times

const { system } = require("nodemon/lib/config");

// a function can be defined with a set of parameters
// arguments are passed at function call for parameters

// Normal Function

function greet() {
  // Function declaration
  console.log("Hello World"); // main Body
}
greet(); // function invocation

// parameters and arguments

function add(a, b) {
  console.log(a + b);
}
add(4, 5);
add(8, 9);
add(13, 15);

function calc(a, b) {
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  console.log(a % b);
}
calc(12, 8);
