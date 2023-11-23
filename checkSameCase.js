function sameCase(a, b){
    if(a.length == 0 || b.length == 0 || /[^a-zA-Z]/.test(a) || /[^a-zA-Z]/.test(b)){
      return -1
    }
    else if((a.toUpperCase() === a && b.toUpperCase() === b) || (a.toLowerCase() === a && b.toLowerCase() === b)){
      return 1;
  }
    return 0;
  }