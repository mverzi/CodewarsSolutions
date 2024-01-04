function sumDigPow(a, b) {
    let result = []
    for(let i = a; i <= b; i++) {
      const currentNum = i
      if(currentNum >= 1 && currentNum <= 9){
        result.push(currentNum)
      } else {
        let arrayNum = Array.from(String(currentNum), Number)
        for(let i = 0; i < arrayNum.length; i++){
          arrayNum[i] = arrayNum[i] ** (i + 1);
          if(arrayNum.reduce((a, b) => a + b) === currentNum){
            result.push(currentNum)
          }
        }
      }
    }
    return result
  }