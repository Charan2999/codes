class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = null;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    let popNode = this.first;
    if (this.length === 0) return popNode;
    else if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = popNode.next;
    }
    this.length--;
    return popNode;
  }
}

let queue = new Queue();

queue.enqueue(3);
queue.enqueue(13);
queue.enqueue(23);
queue.enqueue(33);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue);
