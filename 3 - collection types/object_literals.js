let person = {
  name: "aniket jain",
  age: 23,
  gender: "Male",
  hobbies: ["coding", "chess"],
  address: {
    city: "ajmer",
    state: "rajasthan",
    pin: 305001,
  },
};

console.log("My name is", person.name);
console.log("My age is", person.age);
console.log("My gender is", person.gender);
console.log("My first hobby is", person.hobbies[0]);
console.log("My second hobby is", person.hobbies[1]);
console.log(person.address);
console.log(
  "My address is",
  person.address.city,
  person.address.state,
  person.address.pin
);

person.hobbies.push("football");
console.log(person.hobbies);

//
person.twitter = "hi aniket";
console.log(person.twitter);
console.log(person);
