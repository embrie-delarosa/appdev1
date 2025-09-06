// Spread operator with array
const numbers = [1, 2, 3];
let moreNumbers = [...numbers, 4, 5];
console.log("Cloned and extended array:", moreNumbers);

// Spread operator with object
const user = { name: "Embrie", age: 20 };
const updatedUser = { ...user, course: "BSIS3A" };
console.log("Cloned and extended object:", updatedUser);

// Rest operator
function sum(...numbers) {
  console.log("Numbers received (rest):", numbers);
  console.log("Numbers spread individually:", ...numbers);

  // Add them together
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

let a = [1, 2, 3];
let b = [4, 5];

console.log("Final Sum:", sum(...a, ...b));