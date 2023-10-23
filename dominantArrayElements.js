function solve(arr) {
    var dominantElements = [];
    for(let i = 0; i < arr.length; i++){
      var curr = arr[i];
      var rightElements = arr.slice(i);
      if(Math.max(...rightElements) === curr && !dominantElements.includes(curr)){
        dominantElements.push(curr);
      }
    }
    return dominantElements;
  }