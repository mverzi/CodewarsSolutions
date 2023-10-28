var fibsFizzBuzz = function(n) {
  
    if(n === 1) return [1];
    
    var n1 = 1;
    var n2 = 1;
    var nextTerm;
    var result = [1, 1];
    
    nextTerm = n1 + n2;
    var count = 2;
    while(count < n){
      if(nextTerm % 3 === 0 && nextTerm % 5 === 0){
        result.push("FizzBuzz");
      }
      else if(nextTerm % 3 === 0){
        result.push("Fizz");
      }
      else if(nextTerm % 5 === 0){
        result.push("Buzz")
      }
      else{
        result.push(nextTerm);
      }
      n1 = n2;
      n2 = nextTerm;
      nextTerm = n1 + n2;
      count++;
    }
    
    return result;
  }