var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    var length = someInstance.size(storage);
    storage[length] = value;
  };

  someInstance.pop = function(){
    var length = someInstance.size(storage);
    var tempStore = storage[length-1];
    delete storage[length-1];

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
