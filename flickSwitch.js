function flickSwitch(arr){
    var boolean = true;
    var result = [];
    
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === 'flick' && boolean === true){
        boolean = false;
      }
      else if(arr[i] === 'flick' && boolean === false){
        boolean = true;
      }
      result.push(boolean);
    }
    return result;
  }