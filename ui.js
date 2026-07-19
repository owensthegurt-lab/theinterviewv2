// =====================================
// THE INTERVIEW
// UI
// =====================================

const UI = {

    elements: {},

    // -------------------------
    // Cache HTML Elements
    // -------------------------

    cache() {

        this.elements = {

            speaker: document.getElementById("speaker"),
            dialogue: document.getElementById("dialogue"),
            choices: document.getElementById("choices"),

            room: document.getElementById("room"),
            clock: document.getElementById("clock"),
            light: document.getElementById("light"),
            window: document.getElementById("window"),
            portrait: document.getElementById("portrait"),
            recorder: document.getElementById("recorder"),
            shadow: document.getElementById("shadow"),

            fade: document.getElementById("fade")

        };

    },

    // -------------------------
    // Show Question
    // -------------------------

    showQuestion(question) {

        this.elements.speaker.textContent = question.speaker;

        this.elements.dialogue.textContent = question.text;

    },

    // -------------------------
    // Clear Buttons
    // -------------------------

    clearChoices() {

        this.elements.choices.innerHTML = "";

    },

    // -------------------------
    // Add Button
    // -------------------------

    addChoice(text, callback) {

        const button = document.createElement("button");

        button.className = "choice";

        button.textContent = text;

        button.onclick = callback;

        this.elements.choices.appendChild(button);

    },

    // -------------------------
    // Show Ending
    // -------------------------

    showEnding(ending) {

        this.elements.speaker.textContent = "FINAL REPORT";

        this.elements.dialogue.innerHTML = `

            <h2>${ending.title}</h2>

            <br>

            <p>${ending.description}</p>

        `;

        this.clearChoices();

    },

    // -------------------------
    // Fade
    // -------------------------

    fadeIn() {

        this.elements.fade.style.opacity = 1;

    },

    fadeOut() {

        this.elements.fade.style.opacity = 0;

    },

    // -------------------------
    // Room Effects
    // -------------------------

    updateRoom(stats = {}) {

        if (stats.fear >= 5) {

            this.elements.shadow.style.opacity = ".2";

        }

        if (stats.curiosity >= 5) {

            this.elements.portrait.style.transform =
                "rotate(5deg)";

        }

        if (stats.obedience <= -3) {

            this.elements.light.classList.add("flicker");

        }

    }

};
