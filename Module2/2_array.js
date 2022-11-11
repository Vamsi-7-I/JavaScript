// array methods
var arr = [10, 20, 30, 40];

// pop method -> removes the last element of an array
var a = arr.pop();
console.log("popped array -> ", arr, " popped element ->", a);

// push method -> adds an element at last index of an array
var b = arr.push(50);
console.log("popped array -> ", arr, " popped element -> ", arr[b - 1]);

// shift method -> removes the element at 0th index
var c = arr.shift();
console.log("shifted array -> ", arr, " shifted element -> ", c);

// unshift method -> adds an element at 0th index
var d = arr.unshift(0);
console.log("unshift array -> ", arr, " unshift element -> ", arr[0]);
