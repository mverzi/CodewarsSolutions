function derive(coefficient,exponent) {
    var product = coefficient * exponent
    var exp = exponent - 1
    return `${product}x^${exp}`
  }