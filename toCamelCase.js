function toCamelCase(str){
    if(str === '') return ''
    
    let splitStr = (str.split(/[-_]/))
  
    if (str[0].toLowerCase() === str[0]) {
      return splitStr.map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('')
    } else {
      return splitStr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
    }
    
  }