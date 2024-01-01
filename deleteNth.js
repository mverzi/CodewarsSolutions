function deleteNth(arr,n){
    let result = [];
      let occurrences = {};
  
      for (let i = 0; i < arr.length; i++) {
          let num = arr[i];
  
          if (occurrences[num] === undefined) {
              occurrences[num] = 1;
          } else if (occurrences[num] < n) {
              occurrences[num]++;
          } else {
              continue;
          }
          result.push(num);
      }
      return result;
  }