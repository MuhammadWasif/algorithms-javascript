/*
    Linked List is a data structure in which every node is connected with next node. It is fast at 
    inserts and deletes while slow at reads. Its time complexity is as follows 
    For inserts & deletes: O(1)
    For reads: O(n)
    
    (This is actually bullshit. Because if you wanna insert a node at specific index its complexity 
    is O(n), where n is the index you wanna insert or delete at. So, Linked List is the slowest data
    structure.)
*/

/*
    Here's the detail about methods of LinkedList class.
    
    push: insert element at the last 
    unshift: insert element in the beginning
    pop: remove element from last
    removeAt: remove element from specific index
    insertAt: add element at specific index
    readAll: returns all elements as an array

*/

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
  }

  length = 0;

  push(value) {
    let new_node = {
      value,
      next: null,
    };

    this.tail.next = new_node;
    this.tail = new_node;
    this.length++;
  }

  unshift(value) {
    let new_node = {
      value,
      next: this.head,
    };
    this.head = new_node;
    this.length++;
  }

  insertAt(index, value) {
    if (index - 1 > this.length) throw new Error('Index is bigger than length');
    if (index === 0) return (this.head = { value, next: this.head });

    let pointer = -1,
      previous_node,
      current_node = this.head;

    while (pointer < index - 1) {
      previous_node = current_node;
      current_node = current_node.next;
      pointer++;
    }

    let new_node = {
      value,
      next: current_node,
    };

    previous_node.next = new_node;
    this.length++;
  }

  removeAt(index) {
    if (index - 1 > this.length) throw new Error('Index is bigger than length');
    if (index === 0) return (this.head = this.head.next);

    let pointer = -1,
      previous_node,
      current_node = this.head;

    while (pointer < index - 1) {
      previous_node = current_node;
      current_node = current_node.next;
      pointer++;
    }

    previous_node.next = current_node.next;
    this.length--;
  }

  pop() {
    let current_node = this.head,
      previous_node;

    while (current_node.next) {
      previous_node = current_node;
      current_node = current_node.next;
    }

    delete previous_node.next;
    this.length--;
  }

  readAll() {
    let current_node = this.head;
    let list = [];
    while (current_node) {
      list.push(current_node.value);
      current_node = current_node.next;
    }

    return list;
  }
}

let list = new LinkedList(1);

list.push(4);
list.push(5);
list.unshift(0);
console.log(list.readAll());

list.insertAt(1, 2);
console.log(list.readAll());

list.pop();
console.log(list.readAll());

list.insertAt(0, 10);
console.log(list.readAll());
