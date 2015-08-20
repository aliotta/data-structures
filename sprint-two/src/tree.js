var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree,treeMethods);
  return newTree;
};


  // your code here
  //newTree.children = null;  // fix me


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target){
  if ( this.value === target){
    return true;
  } else if (this.children.length > 0){
    for (var i =0; i < this.children.length; i++){
      if (this.children[i].contains(target)) {
        return true;
      }
    }
    return false;
  } else {
    return false;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 .addChild will be O(1) constant time.  .contains will be at least O(n).
 */

//Functional Shared
