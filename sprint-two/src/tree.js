var Tree = function(value){
  var newTree = {};
  //Sets value property of new Tree node 
  newTree.value = value;
  //Create an array to store the node's child nodes
  newTree.children = []; 
  //Adds treeMethods as properties of newTree
  _.extend(newTree,treeMethods);
  return newTree;
};

//Storage bin for methods
var treeMethods = {};

//Add a child node to the current node
treeMethods.addChild = function(value){
  //Append new instance of Tree with input value
  //to end of nodes children array.
  this.children.push(new Tree(value));
};

//Check if the target value exists anywhere in the
//selected tree node.  
treeMethods.contains = function(target){
  //If found return true
  if (this.value === target){
    return true;
  }
  //Otherwise, if the node has children, run contains
  //on each of the child nodes.   
  else if (this.children.length > 0){
    for (var i =0; i < this.children.length; i++){
      //If found return true
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  } 
  //End of tree has been reached, return false.
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 .addChild will be O(1) constant time.  .contains will be at least O(n).
 */

//Functional Shared
