var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.tail === null) {
      list.head = new Node(value)
      list.tail = list.head;
    } else {
    list.tail.next = new Node(value);
    list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var tempStore = list.head.value;
    list.head = list.head.next;

    return tempStore;
  };

  list.contains = function(target){
    var currentNode = list.head;
    while (currentNode !== null) {
      if (target === currentNode.value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 Contstant time O(1) for .addToTail and .removeHead.  O(n) time for .contains 
 it must proceed through the list <= n times.
 */

 //Binding Pattern: functional
