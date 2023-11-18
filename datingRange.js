function datingRange(age){
    var min, max;
    if(age <= 14){
      min = Math.floor(age - 0.10 * age)
      max = Math.floor(age + 0.10 * age)
    }
    else {
      min = Math.floor(age / 2 + 7)
      max = Math.floor((age - 7) * 2)
    }
    return min + "-" + max
  }