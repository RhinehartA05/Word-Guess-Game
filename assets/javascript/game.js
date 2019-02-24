
//Computer chooses random word
let word = ['building','hardware','resource','computer','firewall','internet']; 

let random = Math.floor(Math.random() * word.length); //picks random word
let blank = word[random] //the random word will be equal to blank
console.log(blank); //console shows random word which equals to blank

//Correct Answers
let answerBlank = [];
for (let i = 0; i < blank.length;i++){
    answerBlank[i] = '_'; //creates underscores for each word
}
let lettersRemaining = word.length;
while (lettersRemaining > 0) {
console.log(answerBlank.join());
break;
};

// //Incorrect Answers

//Get Player Guesses






// for (let j = 0; j <word.length; j++){
//     if (word[j] === userGuess){
//         answerBlank[j] = userGuess;
//         lettersRemaining- -;
//     }
// };

