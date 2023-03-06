/*
SPS Part 1 Codes Before revamp: 
sessionStorage.setItem('Score', 0);

function addScore (currentScore) {
  sessionStorage.setItem("Score", currentScore + 1);
  var updatedScore = parseInt(sessionStorage.getItem("Score"));
  return updatedScore;
}

function minusScore (currentScore) {
  if (currentScore === 0) {
    var updatedScore = sessionStorage.getItem("Score");
  } else {
    sessionStorage.setItem("Score", currentScore - 1);
    var updatedScore = sessionStorage.getItem("Score");
  }

  return updatedScore;
}

var randomiseChoice = function () {
  var randomChoice =
    computerPossibleChoices[
      Math.floor(Math.random() * computerPossibleChoices.length)
    ];
  return randomChoice;
};

var matchChoices = function (playerChoice, randomAIChoice) {
  var myOutputValue = "";
  var currentScore = parseInt(sessionStorage.getItem("Score"));
  var displayScore = currentScore;
   if (
     playerChoice != "scissors" &&
     playerChoice != "paper" &&
     playerChoice != "stone" &&
     playerChoice != "reversed scissors" &&
     playerChoice != "reversed paper" &&
     playerChoice != "reversed stone"
   ) {
     myOutputValue = `Invalid Input. Please type one of the following correct inputs : scissors, paper, stone, reversed scissors, reversed paper, reversed stone`;
   } else if (randomAIChoice == "scissors" && playerChoice == "scissors") {
     myOutputValue = `The computer chose ${randomAIChoice} ✂️.<br>
    You chose ${playerChoice}.<br>
    Its a tie.<br>
    Now you can type "scissors" "paper" or "stone" to play another round!<br>
    Score : ${displayScore}`;
   } else if (randomAIChoice == "scissors" && playerChoice == "stone") {
    
     displayScore = addScore(currentScore);

     myOutputValue = `The computer chose ${randomAIChoice} ✂️.<br>
    You chose ${playerChoice}.<br>
    You win! Hip Hip Hooray! <br>
    Now you can type "scissors" "paper" or "stone" to play another round!<br>
    Score : ${displayScore}`;

   } else if (randomAIChoice == "scissors" && playerChoice == "paper") {

     displayScore = minusScore(currentScore);
    
     myOutputValue = `The computer chose ${randomAIChoice} ✂️.<br>
    You chose ${playerChoice}.<br>
    You lose! Bummer. <br>
    Now you can type "scissors" "paper" or "stone" to play another round!<br>
    Score : ${displayScore}`;

   } else if (randomAIChoice == "paper" && playerChoice == "paper") {
     myOutputValue = `The computer chose ${randomAIChoice} 📃.<br>
    You chose ${playerChoice}.<br>
    Its a tie.<br>
    Now you can type "scissors" "paper" or "stone" to play another round!<br>
    Score : ${displayScore}`;

   } else if (randomAIChoice == "paper" && playerChoice == "scissors") {

    displayScore = addScore(currentScore);

     myOutputValue = `The computer chose ${randomAIChoice} 📃.<br>
    You chose ${playerChoice}.<br>
    You win! Hip Hip Hooray! <br>
    Now you can type "scissors" "paper" or "stone" to play another round!<br>
    Score : ${displayScore}`;

   } else if (randomAIChoice == "paper" && playerChoice == "stone") {

    displayScore = minusScore(currentScore);

     myOutputValue = `The computer chose ${randomAIChoice} 📃.<br>
    You chose ${playerChoice}.<br>
    You lose! Bummer. <br>
    Now you can type "scissors" "paper" or "stone" to play another round!<br>
    Score : ${displayScore}`;
   } else if (randomAIChoice == "stone" && playerChoice == "stone") {

     myOutputValue = `The computer chose ${randomAIChoice} 💎.<br>
    You chose ${playerChoice}.<br>
    Its a tie.<br>
    Now you can type "scissors" "paper" or "stone" to play another round!<br>
    Score : ${displayScore}`;

   } else if (randomAIChoice == "stone" && playerChoice == "paper") {

    displayScore = addScore(currentScore);

     myOutputValue = `The computer chose ${randomAIChoice} 💎.<br>
    You chose ${playerChoice}.<br>
    You win! Hip Hip Hooray! <br>
    Now you can type "scissors" "paper" or "stone" to play another round!<br>
    Score : ${displayScore}`;
   } else if (randomAIChoice == "stone" && playerChoice == "scissors") {

    displayScore = minusScore(currentScore);

     myOutputValue = `The computer chose ${randomAIChoice} 💎.<br>
    You chose ${playerChoice}.<br>
    You lose! Bummer. <br>
    Now you can type "scissors" "paper" or "stone" to play another round!<br>
    Score : ${displayScore}`;

   } else if (randomAIChoice == "scissors" && playerChoice == "reversed scissors") {

     myOutputValue = `The computer chose ${randomAIChoice} ✂️.<br>
    You chose ${playerChoice} 😜.<br>
    Its a tie.<br>
    Now you can type "scissors" "paper" or "stone" to play another round!<br>
    Score : ${displayScore}`;

   } else if (randomAIChoice == "scissors" && playerChoice == "reversed paper") {

    displayScore = addScore(currentScore);

     myOutputValue = `The computer chose ${randomAIChoice} ✂️.<br>
    You chose ${playerChoice} 😜.<br>
    You win! Hip Hip Hooray! <br>
    Now you can type "scissors" "paper" or "stone" to play another round!<br>
    Score : ${displayScore}`;

   } else if (randomAIChoice == "scissors" && playerChoice == "reversed stone") {
    
    displayScore = minusScore(currentScore);

     myOutputValue = `The computer chose ${randomAIChoice} ✂️.<br>
    You chose ${playerChoice} 😜.<br>
    You lose! Bummer. <br>
    Now you can type "scissors" "paper" or "stone" to play another round!<br>
    Score : ${displayScore}`;
   } else if (randomAIChoice == "paper" && playerChoice == "reversed paper") {

     myOutputValue = `The computer chose ${randomAIChoice} 📃.<br>
    You chose ${playerChoice} 😜.<br>
    Its a tie.<br>
    Now you can type "scissors" "paper" or "stone" to play another round!<br>
    Score : ${displayScore}`;

   } else if (randomAIChoice == "paper" && playerChoice == "reversed stone") {
 
    displayScore = addScore(currentScore);

     myOutputValue = `The computer chose ${randomAIChoice} 📃.<br>
    You chose ${playerChoice} 😜.<br>
    You win! Hip Hip Hooray! <br>
    Now you can type "scissors" "paper" or "stone" to play another round!<br>
    Score : ${displayScore}`;

   } else if (randomAIChoice == "paper" && playerChoice == "reversed scissors") {

    displayScore = minusScore(currentScore);

     myOutputValue = `The computer chose ${randomAIChoice} 📃.<br>
    You chose ${playerChoice} 😜.<br>
    You lose! Bummer. <br>
    Now you can type "scissors" "paper" or "stone" to play another round!<br>
    Score : ${displayScore}`;

   } else if (randomAIChoice == "stone" && playerChoice == "reversed stone") {

     myOutputValue = `The computer chose ${randomAIChoice} 💎.<br>
    You chose ${playerChoice} 😜.<br>
    Its a tie.<br>
    Now you can type "scissors" "paper" or "stone" to play another round!<br>
    Score : ${displayScore}`;

   } else if (randomAIChoice == "stone" && playerChoice == "reversed scissors") {

    displayScore = addScore(currentScore);

     myOutputValue = `The computer chose ${randomAIChoice} 💎.<br>
    You chose ${playerChoice} 😜.<br>
    You win! Hip Hip Hooray! <br>
    Now you can type "scissors" "paper" or "stone" to play another round!<br>
    Score : ${displayScore}`;

   } else if (randomAIChoice == "stone" && playerChoice == "reversed stone") {

    displayScore = minusScore(currentScore);

     myOutputValue = `The computer chose ${randomAIChoice} 💎.<br>
    You chose ${playerChoice} 😜.<br>
    You lose! Bummer. <br>
    Now you can type "scissors" "paper" or "stone" to play another round!<br>
    Score : ${displayScore}`;

   } 

   return myOutputValue;
};
*/
