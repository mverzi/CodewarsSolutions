function adjacentElementsProduct(array) {
    var maxProduct = array[0] * array[1];
    
    for(let i = 1; i < array.length; i++){
      if(array[i - 1] * array[i] > maxProduct){
        maxProduct = array[i - 1] * array[i];
      }
    }
    return maxProduct;
  }