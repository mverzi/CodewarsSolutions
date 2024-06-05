function differenceInAges(ages){
    const youngest = Math.min(...ages);
    const oldest = Math.max(...ages);
    const diff = oldest - youngest;
    return [youngest, oldest, diff];
  }