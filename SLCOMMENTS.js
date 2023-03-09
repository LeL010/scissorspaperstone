/*

Hey Eng Lin! This is an awesome attempt for this project! I don't really have a lot of comments to your code! This is great! But here are some things:

    Great job in implementing a lot of the more comfortable functionalities! I like how you added the computer vs computer and the korean SPS modes!
    Great job in implementing arrays and attaching it to the computer's choice! This is a great way to do it!
    I like how you are experimenting and doing stuff like converting strings to ASCII values!
    A slight thing about your string replace on your login function. I like how you are experimenting with regular expression! But in this case, there is a function that simplifies the whole process, and that is the String.trim() function. So rather than var userInput = input.replace(/\s/g, "") it will just be simpler to just do, input.trim(). The thing about this is that, your code works if the user input is say: input = '   muk jji ppa   ' because it's changing all the empty spaces, but the trim function will just take spaces off the beginning and the end, so input will be transformed into input = 'muk jji ppa'.
    This is a nitpick, but your calculateScore function is defined at line 324, but first used at line 108. It's always recommended to have your function be declared prior to it being used. But it would still work just fine!
    And a couple of notes in your logic, I like that there is already an input validation, but the logic here can be optimized, so far when I read your code, your pseudocode is somewhat like this:

if input is invalid --> change output to say that user input is invalid
else 
  if player draw --> add total rounds
  if player win --> add total rounds, add player win count
  else --> add total rounds, add computer win count

But if we see the pattern, rounds will always be added if input is valid, so we can cut some lines here and there, to make the logic be somewhat like

if input is invalid --> change output to say that user input is invalid
else --> 
  add total rounds
  if player draw --> do nothing
  if player win --> add player win count
  else --> add computer win count

    With regards to your logic as well, I see that the assignment of the output value for computer and player is assigned even before the player input is validated. This will burden the performance just very slightly, it's best to assign the output value after the input has been validated.
    To even further optimize stuff, you can use the default value, to have less if/else checks when assigning the value. To do so, we can do something like this:

// set a default value here
var playerOutputValue = 'scissors'
// if papers or stone change it
if (input == 'paper') {
  playerOutputValue = 'paper'
} else if (input == 'stone'){
  playerOutputValue = 'stone'
}

this way, we can cut the if condition by one.

    I see that you factored in a lot of the win condition by adding in codes, while this is not a problem, it may be better if you can refactor the win/draw/lose condition into helper functions! So something like var didPlayerWin = function(playerChoice, computerChoice) and var didPlayerDraw = function(playerChoice, computerChoice) that would return a true/false values which you can use in your if statements!

I think that's about it from my end! You're doing well so far! Keep up the good work! Can't wait to see your following projects!

*/
