function mergeArrays(a, b) {
    var arr = a.concat(b).sort((x, y) => x - y)
    return [...new Set(arr)];
  }