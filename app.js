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

// 5.Task: Find and Modify

// -Write a function that searches an array of objects
// for a specific person by name.
// If found, modify their age property.
// Print the updated array.

const persons = [
  { name: "Rahim", age: 25 },
  { name: "Karim", age: 30 },
  { name: "Hasan", age: 28 },
];

const updateAge = (arr, name, newAge) => {
  return arr.map((person) =>
    person.name === name ? { ...person, age: newAge } : person
  );
};

const updatedPersons = updateAge(persons, "Karim", 35);
console.log(updatedPersons);

// 6.Task: Array Reduction

// -Create an array of numbers. Write a function that uses the reduce
// method to calculate the sum of all even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6, 8];

const sumOfEven = numbers.reduce((sum, num) => {
  if (num % 2 === 0) {
    return sum + num;
  }
  return sum;
}, 0);

console.log(sumOfEven);

// 7. Task: Leap Year Checker

// -Write a function that determines whether a given year is a leap year.

// Example: Happy New Year

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  return year % 4 === 0;
}

const year = 2024;

if (isLeapYear(year)) {
  console.log("Happy New Year");
} else {
  console.log("Not a Leap Year");
}
