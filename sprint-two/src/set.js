var Set = function(){
  //Prototypal instantiation of set object, delegates failed 
  //lookups on set to setPrototype.
  var set = Object.create(setPrototype);
  //Create storage object for nodes
  set._storage = {};
  return set;
};

//Storage bin for methods
var setPrototype = {};

//Add an item to the set.
setPrototype.add = function(item){
  this._storage[item] = item;
};

//Check if an item exists in the set
setPrototype.contains = function(item){
  if (this._storage[item]){
    return true;
  }
  return false;
};

//Remove an item from the set
setPrototype.remove = function(item){
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
All are  constant time O(1)
 */

 //Prototypal


