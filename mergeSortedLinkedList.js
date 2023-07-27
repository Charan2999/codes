class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    let currentValue = this.head;
    let newTail = currentValue;
    while (currentValue.next) {
      newTail = currentValue;
      currentValue = currentValue.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return currentValue;
  }
  shift() {
    if (!this.head) return undefined;
    let shift = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return shift;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  set(index, value) {
    let currentNode = this.get(index);
    if (currentNode) {
      currentNode.value = value;
      return this;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      return !!this.unshift(value);
    } else if (index === this.length) {
      return !!this.push(value);
    }

    let prevNode = this.get(index - 1);
    let currentNode = this.get(index);
    let newNode = new Node(value);
    prevNode.next = newNode;
    newNode.next = currentNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    } else if (index === 0) {
      return !!this.shift();
    } else if (index === this.length - 1) {
      return !!this.pop();
    }

    let prevNode = this.get(index - 1);
    let nextNode = this.get(index + 1);
    prevNode.next = nextNode;
    this.length--;
    return true;
  }

  reverse() {
    //   // head and tail swapping
    //   // let temp = this.head;
    //   // this.head = this.tail;
    //   // this.tail = temp;
    //   // let nextNode = null;
    //   // let prevNode = null;
    //   // for (let i = 0; i < this.length; i++) {
    //   //   nextNode = temp.next;  // 21, 22, 12, null
    //   //   prevNode = temp; // 02,21,22,12
    //   //   temp = nextNode; // 21, 22, 12, null
    //   // }

    let prevNode = null;
    let currentNode = this.head;
    let nextNode = null;
    this.head = this.tail;
    this.tail = currentNode;
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    //   // let prev = null;
    //   // let curr = this.head;
    //   // this.head = this.tail;
    //   // this.tail = curr;
    //   // while (curr) {
    //   //   let next = curr.next;
    //   //   curr.next = prev;
    //   //   prev = curr;
    //   //   curr = next;
    //   // }

    return this;
  }
}

let list1 = new SinglyLinkedList();

list1.push(2);
list1.push(21);
list1.push(22);
list1.push(45);
// console.log(list.pop());
// console.log(list.shift());
// list.unshift(2);
// console.log(list.get(2));
// console.log(list1);

// console.log(list1.reverse());

// console.log(list.insert(3, 1)); // this.length === 3 here because usingthe above methods

// const date = new Date()

// console.log(date)

let list2 = new SinglyLinkedList();
list2.push(1);
list2.push(12);
list2.push(41);
list2.push(60);

const mergeSortedLinkedList = (L1, L2) => {
  if (L1 == null) {
    return L2;
  }
  if (L2 == null) {
    return L1;
  }

  let mergedList = new SinglyLinkedList();
  let mergedListTail = mergedList;

  while (L1 !== null && L2 !== null) {
    if (L1.value <= L2.value) {
      mergedListTail.next = new Node(L1.value);
      L1 = L1.next;
    } else {
      mergedListTail.next = new Node(L2.value);
      L2 = L2.next;
    }
    mergedListTail = mergedListTail.next;
  }

  if (L1 !== null) {
    mergedListTail.next = L1;
  }

  if (L2 !== null) {
    mergedListTail.next = L2;
  }

  mergedList.head = mergedList.head.next; // Skip the initial dummy node
  mergedList.length = list1.length + list2.length;

  return mergedList;
};

console.log(mergeSortedLinkedList(list1, list2));
