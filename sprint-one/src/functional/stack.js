var Stack = function(){
  var someInstance = {};
  //Use an object with numeric keys to store values
  var storage = {};
  //Use counter to track current size of the stack
  var stackSize = 0;
  
  //Add items to the top of the stack
  someInstance.push = function(value){
    storage[stackSize] = value;
    //Increment stackSize
    stackSize++;
  };

  //Remove items from the top of the stack
  someInstance.pop = function(){
    //Save value at top of stack to be returned later
    var tempStore = storage[stackSize-1];
    //delete for the sake of system memory
    delete storage[stackSize-1];
    //Decrement stack size if it is not 0
    if (stackSize !== 0) {
      stackSize--;
    }
    return tempStore;
  };

  //Get the current size of the stack
  someInstance.size = function(){
    return stackSize;
  };

  return someInstance;
};
