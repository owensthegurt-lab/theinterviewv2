// =====================================
// THE INTERVIEW
// GAME
// =====================================

// ---------- Elements ----------

const titleScreen = document.getElementById("titleScreen");
const game = document.getElementById("game");
const startBtn = document.getElementById("startBtn");

// ---------- Start ----------

startBtn.addEventListener("click", startGame);

function startGame() {

    titleScreen.classList.add("hidden");

    game.classList.remove("hidden");

    UI.cache();

    Engine.start();

}
