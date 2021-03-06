

var Graph = function(){
  this.storage = {};
};

var GraphNode = function(value) {
  this.value = value;
  this.edges = {};
};

Graph.prototype.addNode = function(node){
  // debugger;
  this.storage[node] = new GraphNode(node);
};

Graph.prototype.contains = function(target){
  return this.storage.hasOwnProperty(target);
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.storage[fromNode].edges.hasOwnProperty(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].edges[toNode] = toNode;
  this.storage[toNode].edges[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.storage[fromNode].edges[toNode];
  delete this.storage[toNode].edges[fromNode];
};

Graph.prototype.forEachNode = function(callback){
  _.each(this.storage, function (node, key) {
    callback(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var log = function () {
  console.log(this)
}

