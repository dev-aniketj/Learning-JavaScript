for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(i, j);
  }
}

for (var i = 0; i < 10; i++) {
  if (i == 8) break;
  if (i % 2 == 1) continue;
  console.log("hello", i);
}

let vowels = ["a", "e", "i", "o", "u"];
for (let i = 0; i < vowels.length; i++) {
  console.log(vowels[i]);
}

let fruits = new Array("apple", "banana", "mango", "watermelon", "orange");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
