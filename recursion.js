/*
  Factorial of 5 is represnted as 5!
  5! = 5 * 4 * 3 * 2 * 1 = 120
  3! = 3 * 2 * 1 = 6
 */

const factorial = (n) => {
  if (n === 1) return 1;
  else return n * factorial(n - 1);
};

/*
  Find sum of elements of an array without using loop. It uses recursion (divide n conquer rule).
*/
function sumWithoutLoop(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    let elem = array.shift(); // returns first element of array and removes it from array too
    return elem + sumWithoutLoop(array);
  }
}

console.log('Factorial: ', factorial(12));
console.log('Sum without loop: ', sumWithoutLoop([9, 1, 3, 2]));
