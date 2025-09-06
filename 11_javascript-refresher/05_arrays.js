let foods = ["Pizza", "Burger", "Pasta"];
foods.push("Fries");
foods.shift();

for (let food of foods) {
  console.log(food);
}

let likedFoods = foods.map(food => "I like " + food);
console.log(likedFoods);