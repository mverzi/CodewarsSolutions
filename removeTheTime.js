/**
 * This function removes the times from date strings formatted as "May 2, 7pm"
 * @param {string} longDate 
 * @returns shortened string
 */
function shortenToDate(longDate) {
    return longDate.split(',')[0]
  }