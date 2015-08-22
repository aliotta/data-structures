var Stack = function() {
  var someInstance = {};
  //Use an object with numeric keys to store values
  someInstance.storage = {};
  //Use counter to track current size of the stack
  someInstance.stackSize = 0;
  //Add methods in stackMethods to someInstance. Functional
  //-shared instantiation.  stackMethods are the shared methods.
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  //Add items to the top of the stack
  push : function(value){
    this.storage[this.stackSize] = value; 
    //Increment stackSize
    this.stackSize++;
  },
  //Remove items from the top of the stack
  pop : function(){
    //Save value at top of stack to be returned later
    var tempStore = this.storage[this.stackSize -1];
    //delete for the sake of system memory
    delete this.storage[this.stackSize -1];
    //Decrement stack size if it is not 0
    if (this.stackSize !== 0) {
      this.stackSize--;
    }
    return tempStore;
  },
  //Get the current size of the stack
  size : function (){
    return this.stackSize;
  }
};


