function tribonacci(signature,n){
    let result = [...signature]
  
    if(n === 0){
        return []
    } else if(n === 1){
        return [1]
    }
  
    for(let i = 2; i < n-1; i++){
        result.push(result[i-2] + result[i-1] + result[i])
    }
    
    return result
  }