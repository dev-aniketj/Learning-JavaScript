let fruits = ["mango", "banana", "apple"];
fruits.reverse();
console.log(fruits);

let codingLanguages = ["c++", "java", "python", "javascript"];
console.log(codingLanguages);

// Array element access
console.log(codingLanguages[1]); // java
console.log(codingLanguages[0]); // c++
console.log(codingLanguages[3]); // javascript
console.log(codingLanguages[2]); // python

// add new element in last
codingLanguages.push("kotlin");
console.log(codingLanguages);

// add new element in starting
codingLanguages.unshift("react js");
console.log(codingLanguages);

// remove element in last
codingLanguages.pop();
codingLanguages.pop();
console.log(codingLanguages);

// remove element from starting
codingLanguages.shift();
codingLanguages.shift();
console.log(codingLanguages);

// count length of array
console.log(codingLanguages.length);

var friends = new Array("aniket", "aditi", "ayush", "avi", "abhishek");
console.log(friends);
