function isDivisible(n, ...args){
    return args.every(arg => n % arg === 0)
  }