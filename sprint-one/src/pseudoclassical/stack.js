var Stack = function() {
  //Pseudoclassical instantiation
  //Create object to store nodes
  this.storage = {};
  //Create counter to track current stack size.
  this.stackSize = 0;
};
//Add items to the top of the stack
Stack.prototype.push = function(value){
  this.storage[this.stackSize] = value;
  //Increment stackSize.
  this.stackSize++;
}
//Remove items from the top of the stack
Stack.prototype.pop = function(){
  //Save value at top of the stack to be returned later
  var tempStore = this.storage[this.stackSize-1];
  delete this.storage[this.stackSize-1];
  //Decrement stackSize if it is not 0
  if (this.stackSize !== 0) {
    this.stackSize--;
  }
  return tempStore;
}
//Get current size of the stack
Stack.prototype.size = function(){
  return this.stackSize;
}


