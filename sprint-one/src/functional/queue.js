var Queue = function(){
  var someInstance = {};
  //Use an object with numeric keys to store values
  var storage = {};
  //Min is a counter which refers to the index at 
  //the front of the queue.
  var min = 0;
  //Tracks the current size (length) of the queue
  var queueSize = 0;

  //Inserts a value at the back of the queue
  someInstance.enqueue = function(value){
    //Stores input value at current end of the queue.  
    storage[queueSize+min] = value;
    queueSize++;
  };

  //Removes a value from the front of the queue
  someInstance.dequeue = function(){
    //Store the value at the front of the queue
    //to be returned.
    var tempStore = storage[min];
    delete storage[min];
    //Increment min index (compensates for indices
    //removed by dequeue). 
    min++;
    //Decrement queueSize if queueSize is not 0.
    if (queueSize !== 0) {
      queueSize--;
    }

    return tempStore;
  };

  //Finds the current size of the queue
  someInstance.size = function(){
    return queueSize;
  };

  return someInstance;
};



