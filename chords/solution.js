const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

let majorChord = [];
let minorChord = [];

function chords(root) {
  //console.log('index # ', notes.indexOf(root));
  console.log('note : ', notes[notes.indexOf(root)]);
  majorChord.push(notes[notes.indexOf(root)], notes[(notes.indexOf(root) + 4)], notes[(notes.indexOf(root) + 7)]);
  minorChord.push(notes[notes.indexOf(root)], notes[(notes.indexOf(root) + 3)], notes[(notes.indexOf(root) + 7)]);  
  console.log(majorChord);
  console.log(minorChord);
  return [majorChord, minorChord];
}


//this is not a 100% working solution.  The issue is when the note index is greater than 5, the array is not long enough and produces "undefined".  I need to refactor to possibly creating an "if/else" statements.



//round 2  -- still not working!  issue with my Boolean logic

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

let majorChord = [];
let minorChord = [];


function chords(root) {
  majorChord.push(notes[notes.indexOf(root)]);
  
  if((notes.indexOf(root) + 4) != undefined) {
    majorChord.push(notes[(notes.indexOf(root) + 4)]);
  } else {
    majorChord.push(notes[(notes.indexOf(root) - 8)]);
  };
  
  if((notes.indexOf(root) + 7) != undefined) {
    majorChord.push(notes[(notes.indexOf(root) + 7)]);
  } else {
    majorChord.push(notes[(notes.indexOf(root) - 5)]);
  };
  
   minorChord.push(notes[notes.indexOf(root)]);
  
  if((notes.indexOf(root) + 4) != undefined) {
    minorChord.push(notes[(notes.indexOf(root) + 3)]);
  } else {
    minorChord.push(notes[(notes.indexOf(root) - 9)]);
  };
  
  if((notes.indexOf(root) + 7) != undefined) {
    minorChord.push(notes[(notes.indexOf(root) + 7)]);
  } else {
    minorChord.push(notes[(notes.indexOf(root) - 5)]);
  };
  
 
 console.log(majorChord);
 console.log(minorChord);
 
  return [majorChord, minorChord];

majorChord.splice(0, majorChord.length)
minorChord.splice(0, minorChord.length)
 
console.log("clear", majorChord);
console.log("clear", minorChord);
}