function qsort(array) {
  if (array.length <= 2) {
    let a = array[0],
      b = array[1];
    if (a > b) {
      array[0] = b;
      array[1] = a;
    }

    return array;
  }

  // recursive case
  let pivot = array[0],
    less = array.filter((e) => e < pivot),
    greater = array.filter((e) => e > pivot);

  return [...qsort(less), pivot, ...qsort(greater)];
}

console.log(qsort([9, 5, 3, 1, 0, 4, 7, 2, 6, 8]));
