function order(words){
    if(words === "") return ""
    
    words = words.split(' ')
    words.sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)[0], 10)
      const numB = parseInt(b.match(/\d+/)[0], 10)
      return numA - numB
    })
    return words.join(' ')
  }