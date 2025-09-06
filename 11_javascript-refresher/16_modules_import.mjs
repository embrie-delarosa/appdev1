// Import default and named exports
import greet, { info } from "./15_modules_export.mjs";

console.log(greet());
console.log(`My name is ${info.name} and I am ${info.age} years old. ${info.mod}`);