function array(string) {
    let stringArr = string.split(',')
    if(stringArr.length <= 2){
      return null;
    }
    stringArr.pop()
    stringArr.shift()
    return stringArr.join(' ')
  }