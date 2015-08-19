var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value){
  var length = this.size(this.storage);
  this.storage[length] = value;
}
Stack.prototype.pop = function(){
  var length = this.size(this.storage);
  var tempStore = this.storage[length-1];
  delete this.storage[length-1];
  return tempStore;
}
Stack.prototype.size = function(){
  var length = 0;
  for (var key in this.storage){
    if ( this.storage.hasOwnProperty(key)){
      length++;
    }
  }
  return length;
}


