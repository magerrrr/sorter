class Sorter {
  constructor() {
    this.array = new Array();
    this.comparator = function(a,b){
      return a - b;
    };
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) { 
    let newArr = this.array.filter(function(item,i,arr){
      return indices.indexOf(i) != -1;
    });
    newArr = newArr.sort(this.comparator);
    indices = indices.sort(function(a,b){
      return a - b;
    });
    for (let i = 0; i<indices.length;i++)
      this.array[indices[i]] = newArr[i];
  }

  setComparator(compareFunction){
   this.comparator = compareFunction;
  }
}

module.exports = Sorter;