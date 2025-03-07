function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    const date1 = new Date(currentDate);
    const date2 = new Date(expirationDate);
    return (enteredCode === correctCode && date1.getTime() <= date2.getTime())
  }