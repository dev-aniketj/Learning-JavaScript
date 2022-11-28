// write a function which takes principal, rate of interest and time as input and return the simple interest.

// hint : principal, rate of interest * time

function simpleInterest(principal, interest, time) {
  return `The Simple Interest is ${(principal * interest * time) / 100}`;
}

console.log(simpleInterest(10000, 8, 1));
