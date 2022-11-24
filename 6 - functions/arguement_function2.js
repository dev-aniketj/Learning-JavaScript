function printArray(array, arrayName = "New Array") {
  console.log(arrayName);
  for (element of array) {
    console.log(element);
  }
}

let fruits = new Array("banana", "apple", "kiwi", "orange", "watermelon");
let names = ["aditi", "aniket", "abhishek", "ayush", "avi"];

printArray(fruits);
printArray(names, "NAMES");
