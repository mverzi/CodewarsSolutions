function vowelIndices(word){
    let vowels = []
    let letters = word.split('');
    
    for (let i = 0; i < letters.length; i++){
      if (/[aeuoiy]/gi.test(letters[i])) {
        vowels.push(i + 1)
      }
    }
    return vowels
  }