function chunkArrayInGroups(arr, size) {
  // Break it up.
  var groupCount = arr.length/size;
  console.log(groupCount);
  var chunked = [];
  
  for(i = 0; i < groupCount; i++) {
    var sliced = arr.slice(size * i, size + size * i);
    //console.log(sliced);
  	chunked.push(sliced);
  }
  
  return chunked;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2).toString());
console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 2));
console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 3));