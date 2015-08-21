var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v];
  var flag = false;
  if (!this._storage[i]){
    this._storage[i] = [];
  }
  var bucket = this._storage[i];
  for(var j = 0; j < bucket.length; j++){
    if(bucket[j][0] === k ){
      bucket[j] = tuple;
      flag = true;
      //TODO return value
    } 
  }
  if(!flag){
    bucket.push(tuple);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  if (!bucket){
    return null;
  } else if (bucket.length > 0){
    for(var j = 0; j < bucket.length; j++){
      if(bucket[j][0] === k){
        return bucket[j][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  for (var j = 0 ; j < bucket.length; j++){
    if(bucket[j][0] === k){
      bucket.splice(j,1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 Current these methods have linear time complexity O(n).  Ultimately retrieve 
 should be constant until we implement doubling and halving.
 */
