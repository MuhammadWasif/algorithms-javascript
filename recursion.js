/*
  Factorial of 5 is represnted as 5!
  5! = 5 * 4 * 3 * 2 * 1 = 120
  3! = 3 * 2 * 1 = 6
 */

const factorial = (n) => {
  if (n === 1) return 1;
  else return n * factorial(n - 1);
};

console.log(factorial(5));
console.log(factorial(12));
