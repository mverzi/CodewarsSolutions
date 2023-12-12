function alphabetPosition(text) {
    let result = ""
    text = text.replace(/[^a-zA-Z]/g, "").toLowerCase();
    for(let i = 0; i < text.length; i++){
      result += text.charCodeAt(i) - 96
      if (i < text.length - 1) {
        result += " ";
      }
    }
    return result
  }