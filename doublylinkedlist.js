class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let popNode = undefined;
    if (!this.head) return popNode;
    if (this.length === 1) {
      popNode = this.head;
      this.head = null;
      this.tail = null;
    }
    popNode = this.tail;
    let prevNode = popNode.prev;
    this.tail = prevNode;
    this.tail.next = null;
    popNode.prev = null;

    this.length--;
    return lastEle;
  }

  shift() {
    if (!this.head) return this.head;
    let shift = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    shift.next = null;
    return shift;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let start = 0;
    let end = this.length - 1;
    if (index <= Math.floor(this.length / 2)) {
      var getNode = this.head;
      while (start !== index) {
        getNode = getNode.next;
        start++;
      }
      return getNode;
    } else {
      getNode = this.tail;
      while (end !== index) {
        getNode = getNode.prev;
        end--;
      }
      return getNode;
    }
  }
  set(index, value) {
    let setNode = this.get(index);
    if (setNode) {
      setNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      return false;
    } else if (index === 0) {
      return this.unshift(value) ? true : false;
    } else if (index === this.length - 1) {
      return this.push(value) ? true : false;
    } else {
      let newNode = new Node(value);
      let prevNode = this.get(index - 1);
      let nextNode = this.get(index);
      newNode.prev = prevNode;
      prevNode.next = newNode;
      nextNode.prev = newNode;
      newNode.next = nextNode;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    } else if (index === 0) {
      return this.shift() ? true : false;
    } else if (index === this.length - 1) {
      return this.pop() ? true : false;
    } else {
      let prevNode = this.get(index - 1);
      let removeNode = this.get(index);
      let nextNode = this.get(index + 1);

      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      removeNode.next = null;
      removeNode.prev = null;
      this.length--;
      return true;
    }
  }

  print() {
    let node = this.head;
    let result = [];
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    console.log(result);
  }
}

let list = new DoublyLinkedList();

list.push(2);
list.push(12);
list.push(22);
list.push(32);
list.push(42);
list.push(52);
// list.pop();
// list.shift();
// console.log(list.shift());
// list.unshift(12);
// list.unshift(2);
// console.log(list.shift());
// list.shift();

// console.log(list.get(-1));
// console.log(list.get(1));
// console.log(list.get(0));
// console.log(list.get(2));
// console.log(list.get(3));
// console.log(list.get(4));
// console.log(list.get(5));
// console.log(list.get(6));

list.insert(0, -2);
console.log(list.insert(5, 37));
console.log(list.remove(5));
console.log(list.remove(0));

list.print();
console.log(list);
