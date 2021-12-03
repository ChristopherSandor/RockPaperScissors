let userChoice;
let compChoice;
let userScore = 0, compScore = 0;
let resultMessage;
// maybe result


// Startup Functionality

document.getElementById("zero").addEventListener("click", function() {
  getInput(this.id);
});

document.getElementById("one").addEventListener("click", function() {
  getInput(this.id);
});

document.getElementById("two").addEventListener("click", function() {
  getInput(this.id);
});



// Get Inputs (Users Choice)
// .1 event listener
// .2 Onclick call get Input



// Get User input
function getInput(choice)
{
  userChoice = choice;

  getRandomChoice();
// get value from the button that was selected
}

// Get Computers Input
function getRandomChoice()
{
compChoice = Math.floor(Math.random() * 3);
console.log(compChoice);

  compareChoices();
}

// Compare the Inputs
function compareChoices()
{
switch (userChoice + compChoice)
{
  case "two2":
  case "one1":
  case "zero0":
  resultMessage = "Draw!";
  document.getElementById("wl").innerHTML = "You Draw!";
  break;
  case "two0":
  case "one2":
  case "zero1":
  resultMessage = "You Lose :(";
  document.getElementById("wl").innerHTML = "You Lose!";
  UpdateScore("comp")
  break;
  case "two1":
  case "one0":
  case "zero2":
  resultMessage = "You Win";
  document.getElementById("wl").innerHTML = "You Win!";
  UpdateScore("user")
  break;
default:
resultMessage = "Something went wrong...";
}

displayResult();
}

// Display Round Winner
function displayResult()
{

switch (userChoice)
{
  case "zero":
  document.getElementById("usin").innerHTML = "Rock";
  document.getElementById("userimg").src = "img/rock.png"

  break;

  case "one":
  document.getElementById("usin").innerHTML = "Paper";
  document.getElementById("userimg").src = "img/paper.png"

  break;

  case "two":
  document.getElementById("usin").innerHTML = "Scissors";
  document.getElementById("userimg").src = "img/sis.png"

  break;
}

switch (compChoice)
{
  case 0:
  document.getElementById("coin").innerHTML = "Rock";
  document.getElementById("compimg").src = "img/rock.png"
  break;

  case 1:
  document.getElementById("coin").innerHTML = "Paper";
  document.getElementById("compimg").src = "img/paper.png"
  break;

  case 2:
  document.getElementById("coin").innerHTML = "Scissors";
  document.getElementById("compimg").src = "img/sis.png"
  break;
}
}

// Update Score
function UpdateScore(winner)
{
if(winner == "user")
{
userScore++;

}
else {
compScore++;

}
console.log(compScore + " : " + userScore);
document.getElementById("outcome").innerHTML = (userScore + " : " + compScore);
// ubcrenebt user or comp score based on round winner
}

// Reset Score
function resetScore()
{

}
