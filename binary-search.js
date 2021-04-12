const binary_search = (array, item) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    let guess = array[mid];

    if (guess === item) return mid;
    else if (guess > item) high = mid - 1;
    else if (guess < item) low = mid + 1;
  }

  return null;
};

console.log(binary_search([1, 3, 5, 7, 9, 11, 13, 17, 21, 35], 17));
