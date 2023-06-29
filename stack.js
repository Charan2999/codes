class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.size) {
      this.first = node;
      this.last = node;
    } else {
      let currentFirst = this.first;
      this.first = node;
      node.next = currentFirst;
    }
    this.size++;
    return this;
  }

  pop() {
    let popNode = null;
    if (!this.size) return popNode;
    else if (this.size === 1) {
      popNode = this.first;
      this.first = null;
      this.last = null;
    } else {
      popNode = this.first;
      this.first = popNode.next;
    // popNode.next = null
    }
    this.size--;
    return popNode;
  }

  print() {
    let stack = [];
    let node = this.first;
    while (node) {
      stack.push(node.value);
      node = node.next;
      // this.size--;
    }
    return stack;
  }
}

let list = new Stack();

list.push(1);
list.push(11);
list.push(12);

console.log(list.pop())
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.pop())


console.log(list.print());

console.log(list);
