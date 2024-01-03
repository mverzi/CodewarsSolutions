function generateShape(integer){
    const str = Array(integer).fill('+').join('')
    
    let result = ''
  
    for(let i = 0; i < integer; i++){
      result += str
      if(i != integer - 1){
        result += '\n'
      }
    }
    return result
  }