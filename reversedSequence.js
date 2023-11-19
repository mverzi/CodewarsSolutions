const reverseSeq = n => {
    return Array.from(Array(n).keys(), i => n - i);
  };