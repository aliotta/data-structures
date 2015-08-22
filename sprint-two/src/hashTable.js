//Makes a hash table data structure. Stored properties include
//the max length of the table and the actual table itself.
var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//Adds an item to the hash table. Utilizes hash function to 
//find numerical index for the key "k". Hash function will 
//always return the same number for a given string.  Puts
//k,v in a tuple, which is stored in a bucket of the table.
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v];
  var flag = false;
  if (!this._storage[i]){
    this._storage[i] = [];
  }
  //bucket will hold all the tuples for a given index
  var bucket = this._storage[i];
  for(var j = 0; j < bucket.length; j++){
    //if given key already exists in a tuple, overwrites tuple
    if(bucket[j][0] === k ){
      bucket[j] = tuple;
      flag = true;
    } 
  }
  if(!flag){
    bucket.push(tuple);
  }
};

//Retrieve the value for the given key "k"
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  //if the bucket is empty, hash table does not 
  //contain the desired value
  if (!bucket){
    return null;
  } else if (bucket.length > 0){
    //search through tuples, return value if key is found
    for(var j = 0; j < bucket.length; j++){
      if(bucket[j][0] === k){
        return bucket[j][1];
      }
    }
  }
  return null;
};

//Remove the tuple that corresponds to the key "k".  Find the 
//bucket for "k", search through its tuples, and remove the 
//desired tuple.
HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  for (var j = 0 ; j < bucket.length; j++){
    if(bucket[j][0] === k){
      bucket.splice(j,1);
    }
  }
};

HashTable.prototype.resize = function(size) {
  if (size > this._limit * 0.75) {
    //resize and restructure
  } else if (size < this._limit * 0.25) {
    //resize and restructure
  }
}




/*
 * Complexity: What is the time complexity of the above functions?
 Current these methods have linear time complexity O(n).  Ultimately retrieve 
 should be constant until we implement doubling and halving.
 */
