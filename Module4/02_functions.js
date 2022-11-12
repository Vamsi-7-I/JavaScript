// function expression
// anonymous function

// what is an expression?
// set of statements,values,operations which evaluates value to a variable

var add = function (a, b) {
  console.log(a + b);
};
add(2, 4);

// return -> catches the value and returns it

var sub = function (a, b) {
  return a - b;
};
var res = sub(12, 5);
console.log(res);
