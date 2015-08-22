var Stack = function() {
  //Prototypal instantiation. Failed property lookups on
  //someInstance will delegate to stackMethods.
  var someInstance = Object.create(stackMethods);
  //Create object to store nodes
  someInstance.storage = {};
  //Create counter to track current stack size.
  someInstance.stackSize = 0;

  return someInstance;
};

var stackMethods = {
  //Add items to the top of the stack
  push : function(value) {
    this.storage[this.stackSize] = value;
    //Increment stackSize.
    this.stackSize++;
  },
  //Remove items from the top of the stack
  pop : function() {
    //Save value at top of the stack to be returned later
    var tempStore = this.storage[this.stackSize-1];
    delete this.storage[this.stackSize-1];
    //Decrement stackSize if it is not 0
    if (this.stackSize !== 0) {
      this.stackSize--;
    }

    return tempStore;
  },
  //Get current size of the stack
  size : function() {
    return this.stackSize;
  }
};


