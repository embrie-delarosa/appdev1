const aboutMe = {
  name: "Embrie",
  age: 21,
  course: "BSIS3A",
  introduce: function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

aboutMe.hobby = "Dancing";

aboutMe.introduce();
console.log(aboutMe);