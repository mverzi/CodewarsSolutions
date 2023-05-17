/**
 * This function returns what you should drink based on your age
 * @param {number} old 
 * @returns string
 */
function peopleWithAgeDrink(old) {
    if(old < 14){
      return 'drink toddy'
    }
    else if(old < 18){
      return 'drink coke'
    }
    else if(old < 21){
      return 'drink beer'
    }
    else {
      return 'drink whisky'
    }
  };