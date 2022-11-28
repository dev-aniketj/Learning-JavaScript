function findElement(array, element) {
  let flag = false;
  let i;
  for (i = 0; i < array.length; i++) {
    if (array[i] === element) {
      flag = true;
      break;
    }
  }

  if (flag) return `${element} is found at ${i}.`;
  else return `${element} is not found in an [${array}].`;
}

console.log(findElement([3, 1, 4, 2, 7, 9, 6, 10], 8));
console.log(findElement([3, 1, 4, 2, 7, 9, 6, 10], 2));
console.log(findElement([3, 1, 4, 2, 7, 9, 6, 10], 5));
