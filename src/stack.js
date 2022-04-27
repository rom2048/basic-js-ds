class Stack {
  constructor(array) {
    if (array) {
      this.array = array;
    } else {
      this.array = [];
    }
  }

  push(element) {
    this.array.push(element);
  }

  pop() {
    return this.array.pop();
  }

  peek() {
    return this.array[this.array.length - 1];
  }
}

module.exports = {
  Stack
};
