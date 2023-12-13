Array.prototype.square = function() {
    return this.map(function(num) {
      return num * num;
    })
  }
  
  Array.prototype.cube = function(){
    return this.map(function(num) {
      return num ** 3;
    })
  }
  
  Array.prototype.average = function(){
    if(this.length === 0) return NaN;
    return this.reduce((a, b) => a + b) / this.length;
  }
  
  Array.prototype.sum = function(){
    return this.reduce((a, b) => a + b);
  }
  
  Array.prototype.even = function() {
    return this.filter(num => num % 2 === 0)
  }
  
  Array.prototype.odd = function(){
    return this.filter(num => num % 2 !== 0)
  }