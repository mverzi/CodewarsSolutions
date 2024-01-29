function highAndLow(numbers){
    numbers = numbers.split(' ').map(str => Number(str))
    return Math.max(...numbers) + ' ' + Math.min(...numbers)
  }