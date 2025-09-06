let hobbies = ["Biking", "Dancing"];
hobbies.map(hobby => console.log(hobby));

let student = { name: "Embrie", age: 21 };
let { name, age } = student;
console.log(name, age);

let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];
console.log(newArr);