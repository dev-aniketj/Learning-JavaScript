// Logical Operators
// &&, ||, !

let num1 = 10,
  num2 = 20;

// &&
if (num1 < num2 && num1 > 5) {
  console.log("num2 is greater than num1.\nAnd\nnum1 is greater than 5.");
}

// ||
if (num1 > num2 || num1 > 5) {
  console.log("num2 is greater than num1.\nOr\nnum1 is greater than 5.");
}

// !
let flag = false;
if (!flag) {
  console.log("Number is Even");
} else {
  console.log("Number is Odd");
}
