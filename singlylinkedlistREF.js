class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  push(val) {
    let newNode = new Node(val);
    // console.log(newNode);
    if (!this.head) {
      this.head = newNode;
      console.log(this.head);
      this.tail = this.head;
      console.log(this.tail);
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let popNode = null;
    if (!this.head) {
      return undefined;
    } else {
      let temp = this.head;
      if (!temp.next) {
        popNode = temp.val;
        this.head = null;
        this.tail = null;
      } else {
        while (temp.next.next !== null) {
          temp = temp.next;
        }
        popNode = temp.next.val;
        temp.next = null;
        this.tail = temp;
      }
    }
    this.length--;
    return popNode;
  }
}

let list = new SinglyLinkedList();
list.push(32);
list.push(49);
list.push(34);
list.push(27);
list.pop();
console.log(list);
