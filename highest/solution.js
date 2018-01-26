function high(x){
    var wordList = x.split(" ");
    var maxScore = -1;
    var maxWord = "";
    for (var i = 0 ; i < wordList.length; i++){
        var score = wordScore(wordList[i]);
        if (score > maxScore){
        maxScore = score;
        maxWord = wordList[i];
        }
    }
    return maxWord; 
} 
function wordScore(word){
    charArray = word.split("");
    var sum = 0;
    charArray.forEach(function(element) {sum = sum + element.charCodeAt(0) - 'a'.charCodeAt(0) + 1});
    return sum;
}