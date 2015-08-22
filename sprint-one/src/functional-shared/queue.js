var Queue = function(){
  var someInstance = {};
  //Object to store nodes
  someInstance.storage = {};
  //Min is a counter which refers to the index at 
  //the front of the queue.
  someInstance.min = 0;
  //Tracks the current size (length) of the queue
  someInstance.queueSize = 0;
  //Add queueMethods as properties of someInstance
  _.extend(someInstance,queueMethods);
  return someInstance;
};

var queueMethods = {
  //Inserts a value at the back of the queue
  enqueue : function(value){
    //Stores input value at current end of the queue.
    this.storage[this.queueSize + this.min] = value;
    //increment queueSize
    this.queueSize++;
  },
  //Removes a value from the front of the queue
  dequeue : function(){
    //Store the value at the front of the queue
    //to be returned.
    var tempStore = this.storage[this.min];
    delete this.storage[this.min];
    //Increment min index (compensates for indices
    //removed by dequeue). 
    this.min++;
    //Decrement queueSize if queueSize is not 0.
    if (this.queueSize !== 0){
      this.queueSize--;
    }
    return tempStore;
  },
  //Finds the current size of the queue
  size : function(){
    return this.queueSize;
  }
};


