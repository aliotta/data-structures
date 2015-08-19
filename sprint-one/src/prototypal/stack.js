var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {
  push : function(value) {
    var length = this.size(this.storage);
    this.storage[length] = value;
  },
  pop : function() {
    var length = this.size(this.storage);
    var tempStore = this.storage[length-1];
    delete this.storage[length-1];

    return tempStore;
  },
  size : function() {
    var length = 0;
    for (var key in this.storage) {
      if (this.storage.hasOwnProperty(key)) {
        length++;
      }
    }

    return length;
  }
};


