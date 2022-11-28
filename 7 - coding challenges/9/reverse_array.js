function reverseArray(array) {
  let reverse_array = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reverse_array.push(array[i]);
  }

  console.log(`Reverse of an array is ${reverse_array}`);
}

reverseArray([1, 2, 3, 4, 5]);
