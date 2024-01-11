function maskify(cc) {
    return cc.slice(0, -4).split('').map(char => {
      return '#'
    }).join('') + cc.slice(-4)
  }