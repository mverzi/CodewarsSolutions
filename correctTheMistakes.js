/**
 * Fixes character regonition software that has mistaken S and 5, O and 0, and I and 1
 * @param {str} string 
 * @returns string
 */
function correct(string){
	return string.replaceAll('5', 'S').replaceAll('0', 'O').replaceAll('1', "I")
}