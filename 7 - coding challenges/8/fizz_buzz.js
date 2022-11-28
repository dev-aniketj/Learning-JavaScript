function FizzBuzz(n) {
  if (n % 3 == 0 && n % 5 == 0) {
    console.log("Fizz Buzz");
  } else if (n % 3 == 0) {
    console.log("Fizz");
  } else if (n % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
}

FizzBuzz(15);
FizzBuzz(12);
FizzBuzz(25);
FizzBuzz(13);
