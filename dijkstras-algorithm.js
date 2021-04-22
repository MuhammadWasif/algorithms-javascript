// a dummy graph on which algorithm will run
// image of this graph is given as ./graph_dijkstras.png

let graph = {
  start: {
    a: 4,
    b: 3,
  },
  a: { c: 3, d: 4 },
  b: {
    a: 3,
    d: 5,
    e: 1,
  },
  c: { fin: 2 },
  d: { fin: 1 },
  e: { d: 3, fin: 6 },
};
let costs = {
  a: 4,
  b: 3,
  c: Infinity,
  d: Infinity,
  e: Infinity,
  fin: Infinity,
};
let parents = {
  a: 'start',
  b: 'start',
  c: 'a',
  d: 'a',
  e: 'b',
};

const find_lowest_cost_node = (costs, checked = []) => {
  let lowest_cost = Infinity;
  let lowest_cost_node = null;

  for (let node in costs) {
    if (checked.includes(node)) continue;
    if (lowest_cost > costs[node]) {
      lowest_cost = costs[node];
      lowest_cost_node = node;
    }
  }
  return lowest_cost_node;
};

const dijkstras_algorithm = () => {
  let node = find_lowest_cost_node(costs);
  let processed = [];

  while (node && !processed.includes(node)) {
    let neighbors = graph[node];

    for (let neighbor in neighbors) {
      let new_cost = costs[node] + graph[node][neighbor];

      if (new_cost < costs[neighbor]) {
        costs[neighbor] = new_cost;
        parents[neighbor] = node;
      }
    }

    processed.push(node);
    node = find_lowest_cost_node(costs, processed);
  }
};

dijkstras_algorithm();

// using recursion for logging the path as a string
function log_path(node) {
  if (node === 'start') {
    return 'start';
  }
  return node + ' ' + log_path(parents[node]);
}

const path = log_path('fin').split(' ').reverse().join(' → ');
console.log(path);
