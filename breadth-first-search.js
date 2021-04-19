/*
This is just a silly graph taken as an example to test the working of following algorithm.

                wasif
                 /\
              ali  amir
               /      /\
             usman  omer hassan asad
                                  /
                               shaheer 


*/
const graph = {
  wasif: ['ali', 'amir'],
  amir: ['omer', 'hassan', 'asad'],
  ali: ['usman'],
  omer: [],
  hassan: [],
  asad: ['shaheer'],
  usman: [],
};

function is_seller(name) {
  if (name === 'shaheer') {
    return true;
  }

  return false;
}

function breadth_first_search(name) {
  let queue = [];
  let searched = [];

  queue.push(name);

  while (queue.length != 0) {
    let person = queue.shift();
    if (searched.includes()) continue;

    if (is_seller(person)) {
      return `${person} is a seller!`;
    }

    let friends = graph[person];
    queue.push(...friends);
    searched.push(person);
  }

  return 'No seller found!';
}

console.log(breadth_first_search('wasif'));
