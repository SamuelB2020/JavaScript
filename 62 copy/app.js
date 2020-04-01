var boscode = require('boscode');


var re = /[aeiou]/
var invalid = ["for", "has", "have", "she", "that", "the", "this", "will", "with"];

function changeLetters(word1,word2) {
    var prefix1 = ""
    for (let i = 0; i < word1.length; i++) {
      if(re.test(word1[i]) == true){
         break;
        }
        else{
        prefix1 += word1[i]
     }
    }
    var prefix2 = ""
        for (let i = 0; i < word2.length; i++) {
          if (re.test(word2[i]) == true) {
            break;
        }
        else {
            prefix2 += word2[i]
        }
    }
    return [prefix1 + word2.substring(prefix2.length, word2.length), prefix2 + word1.substring(prefix1.length, word1.length)]
}


function sentenceSpooner(sentence){
    sentence = sentence.split(" ");
    var Changable = [];
    for (let i = 0; i < sentence.length; i++) {
        if(invalid.indexOf(sentence[i]) == -1 && re.test(sentence[i][0]) != true && sentence[i].length > 2){
            Changable.push(sentence[i]);
        }
    }
    //console.log(Changable);
    for (let x = 0; x < Changable.length; x+=2) {
        var swapped = changeLetters(Changable[x+1],Changable[x]);
        
        Changable[x] = swapped[1];
        Changable[x+1] = swapped[0];
    } 
   // console.log(Changable);
    Changable = Changable.reverse()
    var count = 0
    for (let i = 0; i < sentence.length; i++) {
        if (invalid.indexOf(sentence[i]) == -1 && re.test(sentence[i][0]) != true && sentence[i].length > 2) {
            sentence[i] = Changable[count];
            count ++;
        }
    }
    console.log(sentence.join(" "));
    

}

var textData = boscode.open('textfile2.txt', 'input');
var row = textData.read();
var rowContents;
while (row !== boscode.EOF) {
    rowContents = row;
    sentenceSpooner(rowContents)
    row = textData.read();
}
textData.close();