// =====================================
// THE INTERVIEW
// GAME
// =====================================

const Game = {

    // -------------------------
    // State
    // -------------------------

    current: 0,

    player: {
        answers: [],
        stats: {}
    },

    ui: {},

    // -------------------------
    // Init
    // -------------------------

    init() {

        this.ui = {

            titleScreen: document.getElementById("titleScreen"),
            game: document.getElementById("game"),

            speaker: document.getElementById("speaker"),
            dialogue: document.getElementById("dialogue"),
            choices: document.getElementById("choices"),

            startBtn: document.getElementById("startBtn"),

            fade: document.getElementById("fade"),
            clock: document.getElementById("clock"),
            portrait: document.getElementById("portrait"),
            shadow: document.getElementById("shadow"),
            light: document.getElementById("light")

        };

        // Buttons
        if (this.ui.startBtn) {
            this.ui.startBtn.onclick = () => this.start();
        }
    },

    // -------------------------
    // Start
    // -------------------------

    start() {

        this.current = 0;

        this.player = {
            answers: [],
            stats: {}
        };

        this.ui.titleScreen.classList.add("hidden");
        this.ui.game.classList.remove("hidden");

        this.show();
    },

    // -------------------------
    // Show Question
    // -------------------------

    show() {

        if (this.current >= QUESTIONS.length) {
            this.finish();
            return;
        }

        const q = QUESTIONS[this.current];

        this.ui.speaker.textContent = q.speaker;
        this.ui.dialogue.textContent = q.text;

        this.ui.choices.innerHTML = "";

        q.choices.forEach(choice => {

            const button = document.createElement("button");

            button.className = "choice";
            button.textContent = choice.text;

            button.onclick = () => {
                this.answer(choice);
            };

            this.ui.choices.appendChild(button);

        });

        this.updateRoom();
    },

    // -------------------------
    // Answer
    // -------------------------

    answer(choice) {

        this.player.answers.push(choice.text);

        if (choice.stats) {

            for (const stat in choice.stats) {

                if (!this.player.stats[stat]) {
                    this.player.stats[stat] = 0;
                }

                this.player.stats[stat] += choice.stats[stat];
            }

        }

        this.current++;

        this.show();
    },

    // -------------------------
    // Finish
    // -------------------------

    finish() {

        const ending = getEnding(this.player);

        this.showEnding(ending);

        if (typeof Save !== "undefined") {

            Save.unlockEnding(ending.id);

        }

    },

    // -------------------------
    // Show Ending
    // -------------------------

    showEnding(ending) {

        this.ui.speaker.textContent = "ENDING";

        this.ui.dialogue.innerHTML = `
            <h2>${ending.title}</h2>
            <br>
            <p>${ending.description}</p>
        `;

        this.ui.choices.innerHTML = "";

        const restartButton = document.createElement("button");

        restartButton.textContent = "Play Again";

        restartButton.onclick = () => {

            location.reload();

        };

        this.ui.choices.appendChild(restartButton);

    },

    // -------------------------
    // Room Effects
    // -------------------------

    updateRoom() {

        const stats = this.player.stats;

        // Shadow grows
        if (this.ui.shadow) {

            const fear = stats.fear || 0;

            this.ui.shadow.style.opacity =
                Math.min(fear * 0.05, 0.4);

        }

        // Portrait tilts
        if (this.ui.portrait) {

            const curiosity = stats.curiosity || 0;

            this.ui.portrait.style.transform =
                `rotate(${curiosity * 2}deg)`;

        }

        // Light flickers
        if (this.ui.light) {

            const morality = stats.morality || 0;

            if (morality < -3) {

                this.ui.light.style.opacity = 0.05;

            }

        }

        // Clock
        if (this.ui.clock) {

            const minutes =
                String(this.current).padStart(2, "0");

            this.ui.clock.textContent =
                `9:${minutes} AM`;

        }

    }

};

// -------------------------
// Start Game System
// -------------------------

window.onload = () => {

    Game.init();

};
