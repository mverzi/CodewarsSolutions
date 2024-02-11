const prevMultOfThree = n => {
    while(n >= 1){
      if(n % 3 == 0)
        return n
      n = Math.floor(n / 10)
    }
    return null
  }