function removeNthElement(arr, n) {
    var arrCopy = arr.slice();
    arrCopy.splice(n,1);
    return arrCopy;
}



//Note from KATA creator!!!!!!!!!!!
// The lessons here were: read the docs and DON'T MUTATE THE INPUT
 
// arrCopy = arr only creates a new reference to the same array,
// so mutating one, mutates the other too.
 
// Some katas use the input after you've processed it
// (in this case I made that on purpose),
// mutating it makes the tests fail, so watch out. 