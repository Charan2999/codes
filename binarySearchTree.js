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
      let current = this.root;
      while (current.value != null) {
        if (current.value === value) {
          return true;
        } else if (current.value < value) {
          current = current.right;
        } else {
          current = current.left;
        }
      }
    }
    return false;
  }
  DFSInorder() {
    let array = [];
    let head = this.root;
    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        array.push(node.value);
        traverse(node.right);
      }
    };
    traverse(head);
    return array;
  }
  DFSPreorder() {
    let array = [];
    let head = this.root;
    const traverse = (node) => {
      if (node) {
        array.push(node.value);
        traverse(node.left);
        traverse(node.right);
      }
    };
    traverse(head);
    return array;
  }
}

let binaryTree = new BinarySearchTree();

binaryTree.insert(12);
binaryTree.insert(22);
binaryTree.insert(1);
binaryTree.insert(11);
binaryTree.insert(20);
binaryTree.insert(0);

let binaryTree1 = new BinarySearchTree();

binaryTree1.insert(12);
binaryTree1.insert(22);
binaryTree1.insert(1);
binaryTree1.insert(11);
binaryTree1.insert(20);
binaryTree1.insert(0);
// console.log(binaryTree);

// console.log(binaryTree.find(20));

// console.log(binaryTree);
console.log(binaryTree.DFSInorder());
console.log(binaryTree.DFSPreorder());
// console.log(binaryTree.find(10));

// var isSameTree = function (p, q) {
//   let arr1 = [];
//   let arr2 = [];
//   let head1 = p.root;
//   let head2 = q.root;
//   const traverse1 = (node) => {
//     if (node) {
//       traverse1(node.left);
//       arr1.push(node.value);
//       traverse1(node.right);
//     }
//   };
//   const traverse2 = (node) => {
//     if (node) {
//       traverse2(node.left);
//       arr2.push(node.value);
//       traverse2(node.right);
//     }
//   };
//   traverse1(head1);
//   traverse2(head2);
//   function arraysAreEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//       return false;
//     }

//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }

//     return true;
//   }
//   return arraysAreEqual(arr1, arr2);
// };

// console.log(isSameTree(binaryTree, binaryTree1));
