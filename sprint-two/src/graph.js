

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodes = {};

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  var newNode = {};
  newNode.val = node;
  newNode.edge = {};
  this.nodes[node] = newNode; 
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  if (this.nodes.hasOwnProperty(node)) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var startNode = this.nodes[fromNode];
  if (startNode.edge.hasOwnProperty(toNode)) {
    return true;
  }
  else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  var startNode = this.nodes[fromNode];
  var endNode = this.nodes[toNode];
  startNode.edge[toNode] = endNode;
  endNode.edge[fromNode] = startNode;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var startNode = this.nodes[fromNode];
  var endNode = this.nodes[toNode];
  delete startNode.edge[toNode];
  delete endNode.edge[fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodes) {
    cb(this.nodes[key].val);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 .forEachNode => O(n)
 .contains && .hasEdge => O(log(n))
 .removeEdge && .addNode && addEdge && removeNode => O(1);
 */

 //Pseudoclassical



