// 1. Task: Array Filtering and Mapping
// -Create an array of objects, each representing a person with
// properties like name, age, and gender. Write a function to filter out all
// females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Rahim", age: 25, gender: "male" },
  { name: "Karima", age: 22, gender: "female" },
  { name: "Hasan", age: 30, gender: "male" },
  { name: "Fatema", age: 28, gender: "female" },
];

const result = people
  .filter((person) => person.gender !== "female")
  .map((person) => person.name);

console.log(result);

// 2. Task: Object Manipulation
// -Create an array of objects representing books with
// properties like title, author, and year. Write a function that takes the array and
// returns a new array with only the book titles. Print the result.

const books = [
  { title: "Book A", author: "Author 1", year: 2020 },
  { title: "Book B", author: "Author 2", year: 2018 },
  { title: "Book C", author: "Author 3", year: 2022 },
];

const titles = books.map((book) => book.title);

console.log(titles);

// 3.Task: Function Composition

// -Write three functions: one to square a number,
// one to double a number, and one to add 5 to a number.
// Compose these functions to create a new function that squares a number,
// doubles the result, and then adds 5.

const square = (num) => num * num;
const double = (num) => num * 2;
const addFive = (num) => num + 5;

const composedFunction = (num) => addFive(double(square(num)));

console.log(composedFunction(3));

// 4.Task: Sorting Objects

// -Create an array of objects representing cars with properties like make,
// model, and year. Write a function to sort the array of cars by the year of
// manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Tesla", model: "Model 3", year: 2022 },
];

const sortedCars = cars.sort((a, b) => a.year - b.year);

console.log(sortedCars);


