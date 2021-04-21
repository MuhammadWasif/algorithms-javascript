// a dummy graph on which algorithm will run
let graph = {
  start: {
    a: 6,
    b: 2,
  },
  a: { fin: 1 },
  b: {
    a: 3,
    fin: 5,
  },
};
let costs = {
  a: 6,
  b: 2,
  fin: Infinity,
};
let parents = {
  a: graph.start,
  b: graph.start,
  fin: null,
};

const find_lowest_cost_node = (costs) => {
  let lowest_cost = Infinity;
  let lowest_cost_node = null;

  for (let node in costs) {
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
    let cost = costs[node];
    let neighbors = graph[node];

    for (let n in neighbors) {
      let new_cost = cost + costs[n];
      if (new_cost > costs[n]) {
        console.log('if executed');
        costs[node] = new_cost;
        parents[n] = node;
      }
    }

    processed.push(node);
    node = find_lowest_cost_node(costs);
  }
};

dijkstras_algorithm();
console.log(costs);
console.log(parents);
