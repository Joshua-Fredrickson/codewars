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