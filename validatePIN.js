/**
 * This function checks if a string is a valid pin, only numbers with 4 or 6 digits
 * @param {string} pin 
 * @returns boolean
 */
function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }