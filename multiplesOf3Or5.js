function solution(number){
    let sum = 0;
    for(let i = 1; i < number; i++) {
        let currentNum = i
        if(currentNum % 5 === 0){
            sum += currentNum
        } else if(currentNum % 3 === 0) {
            sum += currentNum
        }
    }
    return sum
  }