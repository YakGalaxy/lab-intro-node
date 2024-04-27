class SortedList {
  constructor(item, length) {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) { return a - b }); 
    this.length = this.items.length; 
  }

  get(pos) {
    if (pos <= this.items.length -1) {
      return this.items[pos]; 
    } else
      throw new Error("OutOfBounds");
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
