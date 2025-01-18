This is the code for the dice rolling JS lab

https://coda.io/@peter-sigurdson/w25-web-technologies-lab-dice-rolling-js-game

<html>
<head>
<title>dice roll game</title>

</head>
<body>
<h1>Welcome to the Dice Rolling Game!</h1>

<button id="rollButton"> Roll Dice! </button>

<div id="results">
<p> Your role: <span id="humanRoll">-</span></p>
<p> Computer's role: <span id="computerRoll">-</span></p>
<p id="winner">-</p>
</div>
</body>
<script src="casino.js"></script>
</html>


const rollButton = document.getElementById("rollButton");
const humanRollDisplay = document.getElementById("humanRoll");
const computerRollDisplay = document.getElementById("computerRoll");
const winnerDisplay = document.getElementById("winner");

rollButton.addEventListener("click", function() {  // Anonymous function here
  const humanRoll = Math.floor(Math.random() * 6) + 1;
  const computerRoll = Math.floor(Math.random() * 6) + 1;

  humanRollDisplay.textContent = humanRoll;
  computerRollDisplay.textContent = computerRoll;

  if (humanRoll > computerRoll) {
    winnerDisplay.textContent = "You Win!";
  } else if (computerRoll > humanRoll) {
    winnerDisplay.textContent = "Computer Wins!";
  } else {
    winnerDisplay.textContent = "It is a tie!";
  }
}); // End of anonymous function
