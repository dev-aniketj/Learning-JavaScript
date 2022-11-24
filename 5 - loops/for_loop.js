for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(i, j);
  }
}

for (var i = 0; i < 10; i++) {
  if (i == 7) break;
  if (i % 2 == 1) continue;
  console.log("hello", i);
}
