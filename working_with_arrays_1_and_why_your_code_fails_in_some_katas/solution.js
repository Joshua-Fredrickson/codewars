function withoutLast(arr) {
    return arr.slice(0, -1);
  }

  // this note from the Kata's creator was insightful!!


  // The lessons here were: read the docs and DON'T MUTATE THE INPUT 
// Some katas use the input after you've processed it
// (in this case I made that on purpose),
// mutating it makes the tests fail, so watch out. 