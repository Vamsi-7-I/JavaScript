// for in loop allows to loop through properties of the objject
// it executes once for each property of object
var colors = {
  primary: "Red",
  secondary: "Blue",
  tertiary: "Green",
};
for (var color in colors) {
  console.log(color, ":", colors[color]);
}

// we can also used it in arrays
colors = ["Red", "Blue", "Green"];
for (var color in colors) {
  console.log("Index of ", color, " is color - ", colors[color]);
}
