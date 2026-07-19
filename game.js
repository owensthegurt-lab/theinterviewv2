// =====================================
// THE INTERVIEW
// GAME ENGINE
// =====================================

const Game = {

    question: 0,

    player: {
        answers: [],
        stats: {}
    },

    elements: {},


    // -------------------------
    // Start
    // -------------------------

    init() {

        this.elements = {

            title: document.getElementById("titleScreen"),
            game: document.getElementById("game"),

            start: document.getElementById("startBtn"),

            speaker: document.getElementById("speaker"),
            dialogue: document.getElementById("dialogue"),
            choices: document.getElementById("choices")

        };


        this.elements.start.onclick = () => {

            this.start();

        };


        console.log("Game ready");

    },


    // -------------------------
    // Begin Interview
    // -------------------------

    start() {

        this.question = 0;

        this.player = {

            answers: [],

            stats: {}

        };


        this.elements.title.classList.add("hidden");

        this.elements.game.classList.remove("hidden");


        this.showQuestion();

    },


    // -------------------------
    // Questions
    // -------------------------

    showQuestion() {


        if (this.question >= QUESTIONS.length) {

            this.end();

            return;

        }


        const q = QUESTIONS[this.question];


        this.elements.speaker.textContent =
            q.speaker;


        this.elements.dialogue.textContent =
            q.text;


        this.elements.choices.innerHTML = "";


        q.choices.forEach(choice => {


            const button =
                document.createElement("button");


            button.textContent =
                choice.text;


            button.className =
                "choice";


            button.onclick = () => {

                this.choose(choice);

            };


            this.elements.choices.appendChild(button);


        });

    },


    // -------------------------
    // Player Choice
    // -------------------------

    choose(choice) {


        this.player.answers.push(choice.text);


        if (choice.stats) {


            Object.keys(choice.stats)
            .forEach(stat => {


                if (!this.player.stats[stat]) {

                    this.player.stats[stat] = 0;

                }


                this.player.stats[stat] +=
                    choice.stats[stat];


            });


        }


        this.question++;


        this.showQuestion();

    },


    // -------------------------
    // Ending
    // -------------------------

    end() {


        const ending =
            getEnding(this.player);



        this.elements.speaker.textContent =
            "ENDING";


        this.elements.dialogue.innerHTML =

        `
        <h2>${ending.title}</h2>
        <br>
        <p>${ending.description}</p>
        `;


        this.elements.choices.innerHTML = "";


        const button =
            document.createElement("button");


        button.textContent =
            "Restart";


        button.onclick = () => {

            location.reload();

        };


        this.elements.choices.appendChild(button);


    }

};


// -------------------------
// Boot Game
// -------------------------

window.addEventListener("load", () => {

    Game.init();

});
