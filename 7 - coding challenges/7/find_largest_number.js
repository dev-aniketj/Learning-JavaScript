function findLargestNumber(array) {
  if (array.length <= 0) return console.log(`Array is Empty.`);
  else {
    let larger = array[0];
    for (let i = 0; i < array.length; i++) {
      if (larger < array[i]) {
        larger = array[i];
      }
    }
    return console.log(`Largest element of an array is ${larger}`);
  }
}

findLargestNumber([5, 1, 2, 6, 3, 4]);
findLargestNumber([72, 10, 25, 106, 63, 14]);
