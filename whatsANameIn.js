function nameInStr(str, name){
    str = str.toLowerCase().split('')
    name = name.toLowerCase().split('')
    let currLetter = 0
    let result = []
    
    for(let i = 0; i < str.length; i++){
      if(str[i] === name[currLetter]){
        result.push(str[i])
        currLetter++
      }
    }
    return name.join('') === result.join('')
  }