console.log("5" == 5);
console.log("5" === 5);

let a;
let b = null;
console.log(a, b);

const obj = {
  regular: function() {
    console.log("Regular:", this);
  },
  arrow: () => {
    console.log("Arrow:", this);
  }
};
obj.regular();
obj.arrow();

let arr1 = [1, 2, 3];
let arr2 = arr1; // reference copy
arr2.push(4);
console.log(arr1, arr2);

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; // spread copy
arr4.push(4);
console.log(arr3, arr4);