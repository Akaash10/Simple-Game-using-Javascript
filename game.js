let key;
document.getElementById("startButton").addEventListener("click", function () {
  key = confirm("Shall we play the game?");
  if (key) {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("game-container").style.display = "flex";
    playGame();
  } else {
    alert("Thanks, until next time!");
  }
});

function playGame() {
  let playerSelect = document.getElementById("player-input");
  let playButton = document.getElementById("playButton");
  let resultDiv = document.getElementById("result");
  let playAgainButton = document.getElementById("play-again-button");

  playButton.addEventListener("click", function () {
    let player = playerSelect.value;
    let computerChoices = ["stone", "paper", "scissor"];
    let computer = computerChoices[Math.floor(Math.random() * 3)];

    alert(`${player} vs ${computer}`);

    if (player === computer) {
      resultDiv.textContent = "It's a tie!";
    } else if (
      (player === "stone" && computer === "scissor") ||
      (player === "scissor" && computer === "paper") ||
      (player === "paper" && computer === "stone")
    ) {
      resultDiv.textContent = "You win!";
    } else {
      resultDiv.textContent = "Computer wins!";
    }

    playAgainButton.style.display = "block";
  });

  playAgainButton.addEventListener("click", function () {
    resultDiv.textContent = "";
    playAgainButton.style.display = "none";
  });
}
