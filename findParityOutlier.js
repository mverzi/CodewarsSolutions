function findOutlier(integers){
    const isEven = integers.slice(0, 3).filter(num => num % 2 === 0).length >= 2;
    return integers.find(num => (num % 2 === 0) !== isEven);
  }