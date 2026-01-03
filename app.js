// 1. Task: Array Filtering and Mapping
// -Create an array of objects, each representing a person with 
// properties like name, age, and gender. Write a function to filter out all 
// females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Rahim", age: 25, gender: "male" },
  { name: "Karima", age: 22, gender: "female" },
  { name: "Hasan", age: 30, gender: "male" },
  { name: "Fatema", age: 28, gender: "female" }
];

const result = people
  .filter(person => person.gender !== "female")
  .map(person => person.name);

console.log(result);


