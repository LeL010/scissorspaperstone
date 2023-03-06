/*
Input should only be "scissors", "paper", or "stone" or "reversed" counterparts. Later on got more game modes which I will
segregate into helper functions.
Anything else and the input will be invalid
Output will be who wins or loses. Based by matching the computer and player choices
Math.random to randomly generate the computer options
3 different cases Win, lose or tie usually
Session Storage is sync not async
This one instead of returning the values using random numbers. I create an array and store the values that I want to use
and same thing Math.random with the limit being the length of the array (cycling all values in the array in simple terms)

var scissor = calculateASCII("scissors");
var paper = calculateASCII("paper");
var stone = calculateASCII("stone");
Scissors value is 889
Paper value is 536
Stone value is 553
*/

var myOutputValue = ``;
var logInStatus = "noLogin";
var userName = "";
var gameMode = "";
console.log("Game Mode is now : " + gameMode);
var playerScore = 0;
var computerScore = 0;
var rounds = 0;

var computerPossibleChoices = ["scissors", "paper", "stone"];

var randomiseChoice = function () {
  var randomChoice =
    computerPossibleChoices[
      Math.floor(Math.random() * computerPossibleChoices.length)
    ];
  return randomChoice;
};

//Calculate ASCII is just for fun and not in actual use.
var calculateASCII = function (string) {
  var allData = 0;
  var actualValues = "";
  for (var i = 0; i < string.length; i++) {
    var data = string.charCodeAt(i);
    allData += data;
    if (i == 0) actualValues += data;
    else actualValues += ", " + data;
  }

  console.log("Sum of " + actualValues + " is " + allData);
  return allData;
};

var normalMode = function (playerChoice, randomAIChoice) {
  var myOutputValue = "";
  var computerOutputValue = "";
  var playerOutputValue = "";

  if (randomAIChoice == "scissors") {
    computerOutputValue = `The computer chose ${randomAIChoice} ✂️.<br>`;
  } else if (randomAIChoice == "paper") {
    computerOutputValue = `The computer chose ${randomAIChoice} 📃.<br>`;
  } else {
    computerOutputValue = `The computer chose ${randomAIChoice} 💎.<br>`;
  }

  if (playerChoice == "scissors") {
    playerOutputValue = `You chose ${playerChoice} ✌.<br><br>`;
  } else if (playerChoice == "paper") {
    playerOutputValue = `You chose ${playerChoice} ✋.<br><br>`;
  } else {
    playerOutputValue = `You chose ${playerChoice} ✊.<br><br>`;
  }

  if (
    playerChoice != "scissors" &&
    playerChoice != "paper" &&
    playerChoice != "stone"
  ) {
    myOutputValue = `Please select a valid choice from the following : scissors, paper or stone. </br></br>`;
  } else {
    if (randomAIChoice == playerChoice) {
      rounds = rounds + 1;
      myOutputValue =
        computerOutputValue +
        playerOutputValue +
        `Its a tie.<br> Now, you can type "scissors", "paper" or "stone" to play another round!<br><br>`;
    } else if (
      (randomAIChoice == "scissors" && playerChoice == "paper") ||
      (randomAIChoice == "paper" && playerChoice == "stone") ||
      (randomAIChoice == "stone" && playerChoice == "scissors")
    ) {
      computerScore = computerScore + 1;
      rounds = rounds + 1;
      myOutputValue =
        computerOutputValue +
        playerOutputValue +
        `You lose! Bummer. <br> Now, you can type "scissors", "paper" or "stone" to play another round!<br><br>`;
    } else {
      rounds = rounds + 1;
      playerScore = playerScore + 1;
      myOutputValue =
        computerOutputValue +
        playerOutputValue +
        `You win! Hip Hip Hooray! <br> Now, you can type "scissors", "paper" or "stone" to play another round!<br><br>`;
    }

    var score = calculateScore();
    myOutputValue = myOutputValue + score;
  }

  return myOutputValue;
};

var reversedMode = function (playerChoice, randomAIChoice) {
  var myOutputValue = "";
  var computerOutputValue = "";
  var playerOutputValue = "";

  if (randomAIChoice == "scissors") {
    computerOutputValue = `The computer chose ${randomAIChoice} ✂️.<br>`;
  } else if (randomAIChoice == "paper") {
    computerOutputValue = `The computer chose ${randomAIChoice} 📃.<br>`;
  } else {
    computerOutputValue = `The computer chose ${randomAIChoice} 💎.<br>`;
  }

  if (playerChoice == "scissors") {
    playerOutputValue = `You chose ${playerChoice} ✌.<br><br>`;
  } else if (playerChoice == "paper") {
    playerOutputValue = `You chose ${playerChoice} ✋.<br><br>`;
  } else {
    playerOutputValue = `You chose ${playerChoice} ✊.<br><br>`;
  }

  if (
    playerChoice != "scissors" &&
    playerChoice != "paper" &&
    playerChoice != "stone"
  ) {
    myOutputValue = `Please select a valid choice from the following : scissors, paper or stone. </br></br>`;
  } else {
    if (randomAIChoice == playerChoice) {
      rounds = rounds + 1;
      myOutputValue =
        computerOutputValue +
        playerOutputValue +
        `Its a tie.<br> Now, you can type "scissors", "paper" or "stone" to play another round!<br><br>`;
    } else if (
      (randomAIChoice == "scissors" && playerChoice == "stone") ||
      (randomAIChoice == "paper" && playerChoice == "scissors") ||
      (randomAIChoice == "stone" && playerChoice == "paper")
    ) {
      computerScore = computerScore + 1;
      rounds = rounds + 1;
      myOutputValue =
        computerOutputValue +
        playerOutputValue +
        `You lose! Bummer. <br> Now, you can type "scissors", "paper" or "stone" to play another round!<br><br>`;
    } else {
      rounds = rounds + 1;
      playerScore = playerScore + 1;
      myOutputValue =
        computerOutputValue +
        playerOutputValue +
        `You win! Hip Hip Hooray! <br> Now, you can type "scissors", "paper" or "stone" to play another round!<br><br>`;
    }

    var score = calculateScore();
    myOutputValue = myOutputValue + score;
  }

  return myOutputValue;
};

var recentWinner = "";

var mukjjippa = function (playerChoice, randomAIChoice) {
  var myOutputValue = "MUK 묵! 🤘 JJI 찌! ✂ PPA 빠! 📰 </br></br>";
  var computerOutputValue = "";
  var playerOutputValue = "";

  if (randomAIChoice == "scissors") {
    computerOutputValue = `The computer chose ${randomAIChoice} ✂️.<br>`;
  } else if (randomAIChoice == "paper") {
    computerOutputValue = `The computer chose ${randomAIChoice} 📃.<br>`;
  } else {
    computerOutputValue = `The computer chose ${randomAIChoice} 💎.<br>`;
  }

  if (playerChoice == "scissors") {
    playerOutputValue = `You chose ${playerChoice} ✌.<br><br>`;
  } else if (playerChoice == "paper") {
    playerOutputValue = `You chose ${playerChoice} ✋.<br><br>`;
  } else {
    playerOutputValue = `You chose ${playerChoice} ✊.<br><br>`;
  }

  if (
    playerChoice != "scissors" &&
    playerChoice != "paper" &&
    playerChoice != "stone"
  ) {
    myOutputValue = `Please select a valid choice from the following : scissors, paper or stone. </br></br>`;
  } else if (
    (randomAIChoice == "scissors" && playerChoice == "paper") ||
    (randomAIChoice == "paper" && playerChoice == "stone") ||
    (randomAIChoice == "stone" && playerChoice == "scissors")
  ) {
    recentWinner = "Computer";
    myOutputValue =
      myOutputValue +
      computerOutputValue +
      playerOutputValue +
      `Computer shouts : "Muk-jji-ppa!"`;
  } else if (
    (randomAIChoice == "scissors" && playerChoice == "stone") ||
    (randomAIChoice == "paper" && playerChoice == "scissors") ||
    (randomAIChoice == "stone" && playerChoice == "paper")
  ) {
    recentWinner = "Player";
    myOutputValue =
      myOutputValue +
      computerOutputValue +
      playerOutputValue +
      `${userName} shouts : "Muk-jji-ppa!"`;
  } else {
    rounds = rounds + 1;

    if (recentWinner == "") {
      myOutputValue =
        myOutputValue +
        computerOutputValue +
        playerOutputValue +
        `It is a draw. Play again? </br></br>`;
    } else if (recentWinner == "Computer") {
      computerScore = computerScore + 1;
      myOutputValue =
        myOutputValue +
        computerOutputValue +
        playerOutputValue +
        `Computer wins :( That is sadge. </br></br>`;
    } else if (recentWinner == "Player") {
      playerScore = playerScore + 1;
      myOutputValue =
        myOutputValue +
        computerOutputValue +
        playerOutputValue +
        `You wins! Skynet is secretly displeased >:( </br></br>`;
    }

    var score = calculateScore();
    myOutputValue = myOutputValue + score;
    recentWinner = "";
  }

  return myOutputValue;
};

var i5vsi7 = function (playerChoice, randomAIChoice) {
  var myOutputValue = "";
  var computerOutputValue = "";
  var playerOutputValue = "";
  playerChoice = randomiseChoice();

  if (randomAIChoice == "scissors") {
    computerOutputValue = `The computer chose ${randomAIChoice} ✂️.<br>`;
  } else if (randomAIChoice == "paper") {
    computerOutputValue = `The computer chose ${randomAIChoice} 📃.<br>`;
  } else {
    computerOutputValue = `The computer chose ${randomAIChoice} 💎.<br>`;
  }

  if (playerChoice == "scissors") {
    playerOutputValue = `You chose ${playerChoice} ✌.<br><br>`;
  } else if (playerChoice == "paper") {
    playerOutputValue = `You chose ${playerChoice} ✋.<br><br>`;
  } else {
    playerOutputValue = `You chose ${playerChoice} ✊.<br><br>`;
  }

  if (
    playerChoice != "scissors" &&
    playerChoice != "paper" &&
    playerChoice != "stone"
  ) {
    myOutputValue = `Please select a valid choice from the following : scissors, paper or stone. </br></br>`;
  } else {
    if (randomAIChoice == playerChoice) {
      rounds = rounds + 1;
      myOutputValue =
        computerOutputValue +
        playerOutputValue +
        `Its a tie.<br> Now, you can type "scissors", "paper" or "stone" to play another round!<br><br>`;
    } else {
      if (
        (randomAIChoice == "scissors" && playerChoice == "paper") ||
        (randomAIChoice == "paper" && playerChoice == "stone") ||
        (randomAIChoice == "stone" && playerChoice == "scissors")
      ) {
        computerScore = computerScore + 1;
        rounds = rounds + 1;
        myOutputValue =
          computerOutputValue +
          playerOutputValue +
          `You lose! Bummer. <br> Now, you can type "scissors", "paper" or "stone" to play another round!<br><br>`;
      } else {
        rounds = rounds + 1;
        playerScore = playerScore + 1;
        myOutputValue =
          computerOutputValue +
          playerOutputValue +
          `You win! Hip Hip Hooray! <br> Now, you can type "scissors", "paper" or "stone" to play another round!<br><br>`;
      }
    }

    var score = calculateScore();
    myOutputValue = myOutputValue + score;
  }

  return myOutputValue;
};

var calculateScore = function () {
  var playerWins = playerScore / rounds;
  var winPercentage = parseFloat((playerWins * 100).toFixed(1));
  var totalTies = rounds - (playerScore + computerScore);

  return `You won ${playerScore} round(s). </br> Computer won ${computerScore} round(s). </br> ${totalTies} ties. </br> You won ${winPercentage}% out of ${rounds} games. <br>`;
};

var checkGameMode = function (playerChoice) {
  var randomAIChoice = randomiseChoice();

  if (gameMode == "Normal") {
    myOutputValue = normalMode(playerChoice, randomAIChoice);
  } else if (gameMode == "Reversed") {
    myOutputValue = reversedMode(playerChoice, randomAIChoice);
  } else if (gameMode == "Mukjjippa") {
    myOutputValue = mukjjippa(playerChoice, randomAIChoice);
  } else if (gameMode == "CvsC") {
    myOutputValue = i5vsi7(playerChoice, randomAIChoice);
  }

  return myOutputValue;
};

var checkLoginStatus = function (input) {
  //Check for whitespace and to prevent user inputting nothing for the username
  var userInput = input.replace(/\s/g, "");
  if (logInStatus == "noLogin" && userInput == "") {
    myOutputValue = `Please enter anything as your username. Thank you!`;
  } else if (logInStatus == "noLogin" && userInput != "") {
    userName = input;
    logInStatus = "login";
    myOutputValue = `Welcome ${userName} ! Please select game mode to get started : Normal or Reversed or Mukjjippa or CvsC. Default game mode is Normal`;
  } else if (logInStatus == "login" && gameMode == "") {
    if (
      input != "Reversed" &&
      input != "Normal" &&
      input != "Mukjjippa" &&
      input != "CvsC"
    ) {
      myOutputValue = `Please select a valid game mode : </br> </br> Normal || Reversed.`;
    } else if (input == "Reversed") {
      gameMode = "Reversed";
      myOutputValue = `You have selected 'Reversed' game mode. The rules are now reversed.`;
    } else if (input == "Normal") {
      gameMode = "Normal";
      myOutputValue = `You have selected 'Normal' game mode. Please input : scissors, paper or stone`;
    } else if (input == "Mukjjippa") {
      gameMode = "Mukjjippa";
      myOutputValue = `You have decided to be a korean and play 'Mukjjippa'. Please input : scissors, paper or stone`;
    } else if (input == "CvsC") {
      gameMode = "CvsC";
      myOutputValue = `You decided to let Skynet VS Legion. Please input : NOTHING MUAHAHAHA! You evil humanoid >:)`;
    }
  } else {
    var playerChoice = input;
    var result = checkGameMode(playerChoice);

    myOutputValue = result;
  }

  return myOutputValue;
};

var reset = function () {
  gameMode = "";
};

var logout = function () {
  userName = "";
  logInStatus = "noLogin";
};

var main = function (input) {
  myOutputValue = checkLoginStatus(input);

  return myOutputValue;
};

