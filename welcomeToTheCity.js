/**
 * 
 * @param {array} name 
 * @param {string} city 
 * @param {string} state 
 * @returns string welcome message
 */
function sayHello( name, city, state ) {
    var fullName = name.join(' ')
    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
  }