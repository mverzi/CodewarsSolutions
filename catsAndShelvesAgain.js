function solution(start, finish) {
    var diff = finish - start
    return Math.floor(diff / 3) + (diff % 3)
  }