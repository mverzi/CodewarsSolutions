function queueTime(customers, n) {
    if(customers.length <= 0) return 0
    let tills = new Array(n).fill(0)
    for(let i = 0; i < customers.length; i++){
      let shortestWait = tills.indexOf(Math.min(...tills))
      tills[shortestWait] += customers[i]
    }
    return Math.max(...tills)
  }