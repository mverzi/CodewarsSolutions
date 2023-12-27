function arrayDiff(a, b) {
    return a.filter(num => !b.includes(num))
  }