const sum = (num1, num2) => {
  return `Sum of ${num1} and ${num2} is ${num1 + num2}.`;
};

const subtract = (num1, num2) => {
  return `Subtract of ${num1} from ${num2} is ${num1 - num2}.`;
};

console.log(sum(10, 20));
console.log(subtract(20, 5));

const helloName = (personName) =>
  console.log(`Hello, My name is ${personName}`);

helloName("Ayush");
helloName("Aniket");
