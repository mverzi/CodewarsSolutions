String.prototype.toAlternatingCase = function () {
    return this.split('').map(letter => letter.toUpperCase() == letter ? letter.toLowerCase() : letter.toUpperCase()).join('')
  }