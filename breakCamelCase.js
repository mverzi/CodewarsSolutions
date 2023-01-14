/**
 * This function breaks up the camel case in a string by adding spaces
 * @param {string} string 
 * @returns string
 */
function solution(string) {
    return string.replace(/([A-Z])/g, " $1").trim()
}