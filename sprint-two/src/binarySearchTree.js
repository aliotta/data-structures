//A pseudoclassical Class to create nodes in the binary search tree 
//data structure.  This is useful because the lookup method has time
//complexity log(n)!
var BinarySearchTree = function(value){
  this.value = value;
  this.left;
  this.right;
};

//This adds a node to the tree by checking whether the value of the 
//insert node is greater than or less than the current node
BinarySearchTree.prototype.insert = function(value) {
  if (value > this.value) {
    var rightChild = this.right;
    if (rightChild) {
      //run insert again starting on right child node
      rightChild.insert(value);
    } else {
      //Creates a new node with "value" when there is no right child.
      this.right = new BinarySearchTree(value);
      rightChild = this.right;
    } 
  } else if (value < this.value) {
    var leftChild = this.left;
    if (leftChild) {
      //run insert again starting on left child node
      leftChild.insert(value);
    } else {
      //Creates a new node with "value" when there is no left child.
      this.left = new BinarySearchTree(value);
      leftChild = this.left;
    }
  } 
};

//1. First this checks if the current nodes value equals our target value
//2. If not this checks if the value is greater than or less than the current node
//And repeats steps one and two for the next node
BinarySearchTree.prototype.contains = function(value) {
  var nextValue;
  if (value === this.value) {
    return true;
  } 
  if (value > this.value) {
    if (this.right) {
      nextValue = this.right;
      return nextValue.contains(value);
    }
    return false; 
  } else if (value < this.value) {
    if (this.left) {
      nextValue = this.left;
      return nextValue.contains(value)
    }
    return false;
  }
};

//Invokes passed in iterator function on every value in the tree.  
BinarySearchTree.prototype.depthFirstLog = function(iterator) {
  iterator(this.value);
  if (this.right) {
    this.right.depthFirstLog(iterator);
  }
  if (this.left) {
    this.left.depthFirstLog(iterator);
  }
};
/*

 * Complexity: What is the time complexity of the above functions?
 For now, .insert is constant time O(1), but if we implement rebalancing it will become O(n).
 .contains is log time O(log(n)). .depthFirstLog is linear O(n), because it must perform the 
 operation exactly n times.
 */

 //Pseudoclassical.
