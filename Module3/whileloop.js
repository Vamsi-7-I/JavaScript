// A while evaluates the condition in the parenthesis()
// if the condition is true,the while loop runs
// the condition is evaluated again until the condition is false

var i = 1; // initialization
var n = 10;
while (i <= n) {
  // condition
  console.log(i);
  i++; // Increment/Decrement
}

// do while
// before checking the condition,it runs atleast once

i = 5;

do {
  console.log(i);
  i++;
} while (i <= n);
