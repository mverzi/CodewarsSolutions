function encode(string) {
    const numbers = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5
    }
    return string.split('').map(letter => numbers[letter] ? numbers[letter].toString() : letter).join('')
    
  }
  
  function decode(string) {
    const letters = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u'
    }
    return string.split('').map(char => letters[char] ? letters[char] : char).join('')
  }