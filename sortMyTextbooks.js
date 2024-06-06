function sorter(textbooks) {
    const regex = /^[a-zA-Z]+$/;
    if(textbooks.some(element => regex.test(element))){
      return textbooks.sort((a, b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase());
        });
    } else {
      return textbooks.sort();
      }
    }