// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// var addTwoNumbers = function (l1, l2) {
//   let sum = 0;
//   let i = 1;
//   while (l1 || l2) {
//     console.log(i);
//     sum *= i;
//     console.log(sum);
//     i *= 10;
//     if (l1) {
//       sum += l1.value;
//       console.log(sum);
//       l1 = l1.next;
//     }
//     if (l2) {
//       sum += l2.value;
//       console.log(sum);
//       l2 = l2.next;
//     }

//   }
//   console.log(sum);
// };

// let l1 = new Node(2);
// l1.next = new Node(4);
// l1.next.next = new Node(3);

// let l2 = new Node(5);
// l2.next = new Node(6);
// l2.next.next = new Node(4);

// console.log(l1);
// console.log(l2);

// addTwoNumbers(l1, l2);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let val1 = l1 !== null ? l1.val : 0;
    let val2 = l2 !== null ? l2.val : 0;
    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    let newNode = new ListNode(sum % 10);
    current.next = newNode;
    current = newNode;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  return dummy.next;
};
