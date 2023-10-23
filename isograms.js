function isIsogram(str){
    var originalString = str
    str = str.toLowerCase().split('')
    var newString = [...new Set(str)]
    return originalString.length === newString.length
  }