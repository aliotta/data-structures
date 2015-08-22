// Instantiate a new graph
var Graph = function(){
  //storage property for nodes
  this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  //Create a new node to be inserted
  var newNode = {};
  //set value property to input
  newNode.val = node;
  //create edge object
  newNode.edge = {};
  //insert the node into the nodes storage
  this.nodes[node] = newNode; 
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  if (this.nodes[node]) {
    return true;
  }
  return false;
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
  if (startNode.edge[toNode]) {
    return true;
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  //Setting the starting and ending nodes as variables for clarity
  var startNode = this.nodes[fromNode];
  var endNode = this.nodes[toNode];
  //add edge pointers in both directions
  startNode.edge[toNode] = endNode;
  endNode.edge[fromNode] = startNode;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  //Setting the starting and ending nodes as variables for clarity
  var startNode = this.nodes[fromNode];
  var endNode = this.nodes[toNode];
  //remove both edge pointers
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



