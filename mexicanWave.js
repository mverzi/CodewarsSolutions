function wave(str){
    if(str === '') return []
    
    let result = []
  
    for(let i = 0; i < str.length; i++){
        str = str.toLowerCase()
        if(str.charAt(i) != ' '){
          result.push(str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1))
        } 
    }
    return result
  }