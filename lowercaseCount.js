function lowercaseCount(str){
    return str.split('').reduce((count, char) => {
      return /[a-z]/.test(char) ? count + 1 : count;
    }, 0)
  }