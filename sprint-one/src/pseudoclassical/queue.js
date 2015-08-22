var Queue = function() {
  //Object to store nodes
  this.storage = {};
  //Min is a counter which refers to the index at 
  //the front of the queue.
  this.min = 0;
  //Tracks the current size (length) of the queue
  this.queueSize = 0;
};
//Defines Methods on queue's prototype bound by instantiation pseudoclassical
//Inserts a value at the back of the queue
Queue.prototype.enqueue = function(value){
  //Stores input value at current end of the queue
  this.storage[this.queueSize + this.min] = value;
  //increment queueSize
  this.queueSize++;
}
//Removes a value from the front of the queue
Queue.prototype.dequeue = function(){
  //Store the value at the front of the queue
  //to be returned.
  var tempStore = this.storage[this.min];
  delete this.storage[this.min];
  //Increment min index (compensates for indices
  //removed by dequeue).
  this.min++;
  //Decrement queueSize if queueSize is not 0.
  if(this.queueSize !== 0){
    this.queueSize--;
  }
  return tempStore;
}
//Finds the current size of the queue
Queue.prototype.size = function(){
  return this.queueSize;
}


