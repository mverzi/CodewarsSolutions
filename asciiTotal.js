function uniTotal (string) {
    var asciiTotal = 0;
    string = string.split('');
    for(var i = 0; i < string.length; i++){
      asciiTotal += string[i].charCodeAt();
    }
    return asciiTotal;
  }