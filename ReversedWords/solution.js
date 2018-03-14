//This is not the solution!!!!!
// function reverseWords(str){
//   //split the words into an array
//   let wordArray = str.split(' ');
//   console.log(wordArray);
//   //reverse the order of the array
//   let reversedArray = wordArray.reverse();
//   console.log(reversedArray);
//   //turn back into string
//   let reversedString = reversedArray.toString();
//   //remove ,  from reversedString using replace and regex
//   let ftw = reversedString.replace(/,/g, ' ');
//   return ftw;
//   }

function reverseWords(str){
  return str.split('').reverse().join(' ');
}