/**
 * This function removes the anchor from a URL
 * @param {string} url 
 * @returns string
 */
function removeUrlAnchor(url){
    return url.split('#')[0]
  }