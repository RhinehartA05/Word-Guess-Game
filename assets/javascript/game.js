//Create Array of the alphabet and words
let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let word = ['confused','hardware','resource','tomorrow','firewall','internet'];


// let spaces = ['_','_','_','_','_','_','_','_']
let notGuessed = word.length;






//Computer chooses word randomly
let random = Math.floor(Math.random() * word.length); //returns a random word
let blank = word[random] //the random word will be equal to blank
console.log(blank);

//creating underscore
let underScore = [];
for (let i = 0; i < word.length; i++){
    underScore[i]= "_";
};

while (notGuessed > 0){

};
 


// let add = function() { //copy paste
//     console.log("add stuff"); //copy paste
// }

//Get guess of player
document.onkeyup = function(event){
    var playerGuess = event.key

    if (playerGuess === "r")

    console.log("Your guess: " + playerGuess);

}

//Create if, else if, else statements based on choice of letter



//move wrong guess to incorrect
//if right guess add letter to word