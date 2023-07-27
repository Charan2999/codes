class MaxBiaryHeap {
  constructor() {
    this.values = [];
  }
  bubble = (index) => {
    while (index >= 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index] > this.values[parentIndex]) {
        let temp = this.values[index];
        this.values[index] = this.values[parentIndex];
        this.values[parentIndex] = temp;
        index = parentIndex;
      } else {
        break;
      }
    }
  };
  insert(val) {
    this.values.push(val);
    this.bubble(this.values.length - 1);
  }

  sinkDown(len, parentIndex) {
    let left = Math.floor(2 * parentIndex + 1);
    let right = Math.floor(2 * parentIndex + 2);
    if (left <= len && right < len) {
      if (this.values[left] > this.values[right]) {
        let temp = this.values[left];
        this.values[left] = this.values[parent];
        this.values[parent] = temp;
      }
    }
  }

  extractMax() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();
    let max = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = max;
    this.sinkDown(this.values.length - 1, 0);
    return max;
  }
}

let maxHeap = new MaxBiaryHeap();

maxHeap.insert(10);
maxHeap.insert(1);
maxHeap.insert(9);
maxHeap.insert(21);
maxHeap.insert(19);

/**
 *             21
             /  \
           19    10
          /  \
         1    9

 */

console.log(maxHeap.extractMax());
// console.log(maxHeap.values);
