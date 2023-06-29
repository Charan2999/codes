class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedLiSt {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  // //push metho -->
  push(val) {
    console.log(new Node(val));
    var newNode = new Node(val);
    console.log(newNode);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }

    this.length++;
    return this;
  }

  //pop metho -->
  // pop() {
  //   if (!this.head) {
  //     return undefined;
  //   }
  //   let currentNode = this.head;
  //   let previousNode = null;

  //   if (!currentNode.next) {
  //     this.head = null;
  //   } else {
  //     while (currentNode.next) {
  //       previousNode = currentNode;
  //       currentNode = currentNode.next;
  //     }
  //     previousNode.next = null;
  //   }
  //   this.length--;
  //   return currentNode;
  // }
}

let list = new SinglyLinkedLiSt();

list.push(2);
list.push(12);
// list.push(21);
// list.pop();
console.log(list);
