function removeEveryOther(arr){
    var i = arr.length
    while (i--) (i + 1) % 2 === 0 && (arr.splice(i, 1))
    return arr
  }