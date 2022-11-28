// write a function which takes list of numbers as inputs and return it's sum

function sum(...numbers) {
  let total = 0;
  for (num of numbers) {
    total += num;
  }
  console.log(`Total Sum is ${total}`);
}

sum(4, 3, 1);

sum(1, 2, 3, 4, 5);

sum(1, 2, 3, 4, 5, 7);
