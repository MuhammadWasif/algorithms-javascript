const findSmallest = (array) => {
  let smallest_elem = array[0];
  let smallest_index = 0;

  for (let [index, e] of array.entries()) {
    if (e < smallest_elem) {
      smallest_elem = e;
      smallest_index = index;
    }
  }

  return smallest_index;
};

const selectionSort = (array) => {
  let newArray = [];
  let len = array.length - 1;

  for (let i = 0; i <= len; i++) {
    let smallest = findSmallest(array);
    newArray.push(array.splice(smallest, 1)[0]);
  }

  return newArray;
};

console.log(selectionSort([4, 6, 2, 5, 9, 1, 8, 3, 7]));
