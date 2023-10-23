/**
 * This function returns the area of squares and rectangles
 * @param {int} l 
 * @param {int} w 
 * @returns int area
 */
const areaOrPerimeter = function(l , w) {
    return l === w ? l * w : 2 * (l + w)
  };