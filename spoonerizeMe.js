/**
 * This function swaps the first letters of two words
 * @param {string} words 
 * @returns string
 */
function spoonerize(words) {
    let word = words.split(' ')
    return [word[1][0] + word[0].slice(1), word[0][0] + word[1].slice(1)].join(' ')
}