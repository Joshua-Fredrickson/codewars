function findShort(s){
    let minWordValue = 100;
    let splittedStr = s.split(" ");
    //1. split the string into individual words.
    console.log(splittedStr);
    //1. count the words.
    //2. this outputs an array.  create a function to count the individual words within the array.
    //2. use logic "<" to evaluate the smallest string
    for (let i = 0; i < splittedStr.length; ++i) {
      console.log(splittedStr[i].length);
      if (splittedStr[i].length < minWordValue) {
        minWordValue = splittedStr[i].length;
      };
    }
    console.log('minWordValue: ', minWordValue);
    return minWordValue;
  }