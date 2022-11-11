// the for of loop creates a loop iterating over iterable objects
// including : built-in string,Array,array like objects like node list,map,set

var scores = [60, 70, 85, 95];

for (var score of scores) {
  console.log(score);
}

// to get array index
// method - entries()

for (var [index, score] of scores.entries()) {
  console.log(index, " - ", score);
}

// for strings

var str = "Hello World!";
for (var ch of str) {
  console.log(ch);
}
