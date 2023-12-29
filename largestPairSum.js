function largestPairSum (numbers) {
    numbers = numbers.sort((a, b) => b - a)
    return numbers[0] + numbers[1]
  }

// function largestPairSum (numbers) {
//     let sum = Math.min(...numbers)
//     for(let i = 0; i < numbers.length; i++){
//       for(let j = i + 1; j < numbers.length; j++){
//         if(numbers[i] + numbers[j] > sum){
//           sum = numbers[i] + numbers[j]
//         }
//       }
//     }
//     return sum
//   }

