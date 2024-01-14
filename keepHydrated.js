/**
 * My solution to the Keep Hydrated! codewars problem
 * @param {*} time is the amount of time in hours a cyclist works out
 * @returns The amount of water in liters the cyclist will drink
 */

function litres(time) {
    return Math.floor(time * 0.5); //returns liters of water the cyclist will drink as a whole number
  }