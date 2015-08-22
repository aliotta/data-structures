var LinkedList = function(){
  //Set storage location for nodes
  var list = {};
  //create node property head and tail to track front and end of data
  //initialized as null
  list.head = null;
  list.tail = null;
  //Adds an item to the tail
  list.addToTail = function(value){
    //check if the tail exists
    if (list.tail === null) {
      //creates a new node to be added and binds it to the 
      //head and tail because it is the first node in the list
      list.head = new Node(value)
      list.tail = list.head;
    } else {
      //set next pointer of current tail to a new instance of node
      //with input value
      list.tail.next = new Node(value);
      //reset tail pointer to the newly inputted tail
      list.tail = list.tail.next;
    }
  };
  //removes the current head and sets the next head value
  list.removeHead = function(){
    //store the current heads value to be returned later
    var tempStore = list.head.value;
    //reset the head pointer to the next item in the list
    list.head = list.head.next;

    return tempStore;
  };
  //checks if a target value can be found in the data set
  list.contains = function(target){
    //store current head in the variable
    var currentNode = list.head;
    //Search until we reach the end of the list
    while (currentNode !== null) {
      //if current nodes value is the search target return true
      if (target === currentNode.value) {
        return true;
      }
      //set the new search node to the next item in the list
      currentNode = currentNode.next;
    }
    //if we reach the end of the list return false
    return false;
  };

  return list;
};

//instantiates a node
var Node = function(value){
  //create node Obect
  var node = {};
  //set nodes value to input value
  node.value = value;
  //initialize next property to null
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 Contstant time O(1) for .addToTail and .removeHead.  O(n) time for .contains 
 it must proceed through the list <= n times.
 */

 //Binding Pattern: functional
