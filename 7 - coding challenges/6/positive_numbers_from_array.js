let numbers = [-2, 0, 5, -43, 2, 1, -190, 72];

function printPositiveNumbers(array) {
  let positive_array = [];
  for (i of array) {
    if (i > 0) {
      positive_array.push(i);
    }
  }
  console.log(`All positive numbers is [${positive_array}]`);
}

printPositiveNumbers(numbers);
