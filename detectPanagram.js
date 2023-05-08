/**
 * This function detects panagrams, or sentences that contain every letter of the alphabet at least once
 * @param {str} string 
 * @returns boolean
 */
function isPangram(string){
    string = string.toLowerCase();
    const { length } = string;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArray = alphabet.split('');
    
    for(let i = 0; i < length; i++){
      const lett = string[i];
      const index = alphaArray.indexOf(lett);
      if(index != -1){
        alphaArray.splice(index, 1);
      }
    }
    return !alphaArray.length;
  }