function averageArray(array) {
  let sum = 0;
  for (ele of array) {
    sum += ele;
  }
  return `Average of an [${array}] is ${sum / array.length}`;
}

let numbers = [3, 1, 4, 5, 6, 7, 2, 10];

console.log(averageArray(numbers));
