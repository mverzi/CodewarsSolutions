/**
 * This function returns an array displaying which users liked a post
 * @param {array} names 
 * @returns array
 */
function likes(names) {
    console.log(names)
    if(names == [] || names.length == 0){
      return "no one likes this"
    } else if(names.length === 1){
      return `${names[0]} likes this`
    } else if(names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    } else if(names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
  }