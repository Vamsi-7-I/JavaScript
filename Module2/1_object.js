// objects are unordered collection of key-value pairs
// keys can be string
// the value of properties can be string,number,array or even function

var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  hasOwnCar: true,
};
console.log(person);

// objects can be accessed by dot notation or bracket notation

console.log(person.age); // dot notation

console.log(person["hasOwnCar"]); // bracket notation

var cap = {
  firstName: "Steve",
  lastName: "Rogers",
  age: 102,

  friends: ["Bucky Barnes", "Bruce Banner", "Tony Stark"],

  isAvenger: true,

  address: {
    state: "New York",
    city: {
      name: "Brooklyn",
      pincode: 123456,
    },
    country: "USA",
  },
};

console.log(cap.friends[1]);

console.log(cap["address"].city["name"]);

// adding values
cap.movies = ["Age Of Ultron", "Civil War", "First Avenger"];

// updating values
cap.isAvenger = false;

// delete values
delete cap.age;

console.log(cap);
