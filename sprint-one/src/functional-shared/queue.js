var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.min = 0;
  _.extend(someInstance,queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue : function(value){
    var length = this.size(this.storage);
    this.storage[length + this.min] = value;
  },
  dequeue : function(){
    var length = this.size(this.storage);
    var tempStore = this.storage[this.min];
    delete this.storage[this.min];
    this.min++;
    return tempStore;
  },
  size : function(){
    var length = 0;
    for (var key in this.storage){
      if(this.storage.hasOwnProperty(key)){
        length++;
      }
    }
    return length;
  }
};


