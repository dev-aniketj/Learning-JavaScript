let array1 = [10, 20, 30, 40, 50];
let array2 = new Array(60, 70, 80, 90, 100);

function mergeArrays(arr1, arr2) {
  let new_array = [];
  for (let i = 0; i < arr1.length; i++) {
    new_array.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    new_array.push(arr2[j]);
  }

  console.log(`New Merge Array is [${new_array}]`);
}

mergeArrays(array1, array2);
mergeArrays([5, 4, 3, 2, 1], [6, 7, 8, 9, 10]);
