//Arrow functions and 1 param
const greet = (name) => {
  return "Hello, " + name;
};

//Arrow function, 1 param, explicit return
const square = (n) => {
  return n * n;
};

//Arrow function, no param, implicit return
const sayHi = () => {
  console.log("Hi!");
};

console.log(greet("Embrie"));
console.log(square(6));
sayHi();