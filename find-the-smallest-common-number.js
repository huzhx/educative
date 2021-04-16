const findSmallestCommonNumber = (mat) => {
  const minHeap = new MinHeap(mat);
  for (let i = 0; i < mat.length; i++) {
    minHeap.push([0, i]);
    if (minHeap.numFreq[mat[i][0]] === mat.length) {
      return mat[i][0];
    }
  }

  while (minHeap.length) {
    const [numIndex, arrIndex] = minHeap.pop();
    if (numIndex < mat[arrIndex].length - 1) {
      const next = mat[arrIndex][numIndex + 1];
      minHeap.push([numIndex + 1, arrIndex]);
      if (minHeap.numFreq[next] === mat.length) {
        return next;
      }
    }
  }
};

class MinHeap {
  constructor(mat) {
    this.heap = [];
    this.length = 0;
    this.mat = mat;
    this.numFreq = {};
  }
  push([numIndex, arrIndex]) {
    if (this.heap.length > this.length) {
      this.heap[this.length] = [numIndex, arrIndex];
    } else {
      this.heap.push([numIndex, arrIndex]);
    }
    this.length++;
    this.__float(this.length - 1);
    const num = this.mat[arrIndex][numIndex];
    this.numFreq[num] = this.numFreq[num] || 0;
    this.numFreq[num]++;
  }

  __float(index) {
    const parent = Math.floor((index - 1) / 2);
    if (index <= 0) {
      return;
    } else {
      const [indexValIndex, indexArrIndex] = this.heap[index];
      const [parentValIndex, parentArrIndex] = this.heap[parent];
      const indexVal = this.mat[indexArrIndex][indexValIndex];
      const parentVal = this.mat[parentArrIndex][parentValIndex];
      if (parentVal > indexVal) {
        const tmp = this.heap[parent];
        this.heap[parent] = this.heap[index];
        this.heap[index] = tmp;
        this.__float(parent);
      }
    }
  }

  pop() {
    const min = this.heap[0];
    this.heap[0] = this.heap[this.length - 1];
    this.length--;
    this.__sink(0);
    const minVal = this.mat[min[1]][min[0]];
    this.numFreq[minVal]--;
    return min;
  }

  __sink(index) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    let min = index;

    const [minValIndex, minArrIndex] = this.heap[min];
    const minVal = this.mat[minArrIndex][minValIndex];

    if (left < this.length) {
      const [leftValIndex, leftArrIndex] = this.heap[left];
      const leftVal = this.mat[leftArrIndex][leftValIndex];
      if (leftVal < minVal) {
        min = left;
      }
    }

    if (right < this.length) {
      const [rightValIndex, rightArrIndex] = this.heap[right];
      const rightVal = this.mat[rightArrIndex][rightValIndex];
      if (rightVal < minVal) {
        min = right;
      }
    }

    if (min !== index) {
      const tmp = this.heap[index];
      this.heap[index] = this.heap[min];
      this.heap[min] = tmp;
      this.__sink(min);
    }
  }
}

export default findSmallestCommonNumber;
