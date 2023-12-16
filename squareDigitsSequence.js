function squareDigitsSequence(a0) {
    let sequence = new Set()
    let current = a0
    let count = 1
    
    while(!sequence.has(current)){
      sequence.add(current)
      count++
      
      let next = 0
      while(current > 0){
        next += Math.pow(current % 10 , 2)
        current = Math.floor(current / 10)
      }
      current = next
    }
    return count
  }