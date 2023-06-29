class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      return this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  find(value) {
    if (!this.isEmpty) {
      return this.root;
    }
    while (this.root.value != null) {
      if (this.root.value === value) {
        return !!this.root;
      } else if (this.root.value < value) {
        this.root = this.root.right;
      } else {
        this.root = this.root.left;
      }
    }
  }
}

let binaryTree = new BinarySearchTree();

binaryTree.insert(12);
binaryTree.insert(22);
binaryTree.insert(1);
binaryTree.insert(11);
binaryTree.insert(10);
binaryTree.insert(9);
binaryTree.insert(20);
binaryTree.insert(0);
console.log(binaryTree);
console.log(binaryTree.find(20));

// console.log(binaryTree);
