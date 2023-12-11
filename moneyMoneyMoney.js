function calculateYears(principal, interest, tax, desired) {
    return Math.ceil(Math.log(desired / principal) / Math.log(1 + interest * (1 - tax)))
  }