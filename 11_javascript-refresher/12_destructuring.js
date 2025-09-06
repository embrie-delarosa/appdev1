const person = {
  name: "Embrie",
  age: 21
};

const { name, age } = person;
console.log("Name:", name);
console.log("Age:", age);

//Array destructuring
const hobbies = ["dancing", "biking"];
const [hobby1, hobby2] = hobbies;
console.log("Hobby 1:", hobby1);
console.log("Hobby 2:", hobby2);

//Function param destructuring
function printName({ name }) {
  console.log("Function printName:", name);
}

printName(person);