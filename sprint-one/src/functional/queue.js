var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var min = 0;

  someInstance.enqueue = function(value){
    var length = someInstance.size(storage);
    storage[length+min] = value;
  };

  someInstance.dequeue = function(){
    var tempStore = storage[min];
    delete storage[min];
    min++;

    return tempStore;
  };

  someInstance.size = function(){
    var length=0;
    for (var key in storage) {
      if (storage.hasOwnProperty(key)) {
        length++;
      }
    }

    return length;
  };

  return someInstance;
};



