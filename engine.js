// =====================================
// THE INTERVIEW
// ENGINE
// =====================================

const Engine = {

    current: 0,

    // -------------------------
    // Start
    // -------------------------

    start() {

        resetPlayer();

        this.current = 0;

        this.showQuestion();

    },

    // -------------------------
    // Current Question
    // -------------------------

    getQuestion() {

        return QUESTIONS[this.current];

    },

    // -------------------------
    // Show Question
    // -------------------------

    showQuestion() {

        if (this.current >= QUESTIONS.length) {

            this.finish();

            return;

        }

        const question = this.getQuestion();

        UI.showQuestion(question);

        UI.clearChoices();

        question.choices.forEach(choice => {

            UI.addChoice(

                choice.text,

                () => this.answer(choice)

            );

        });

        UI.updateRoom(player.stats);

    },

    // -------------------------
    // Answer Question
    // -------------------------

    answer(choice) {

        player.answers.push(choice.text);

        this.addStats(choice.stats);

        this.current++;

        this.showQuestion();

    },

    // -------------------------
    // Stats
    // -------------------------

    addStats(stats = {}) {

        for (const stat in stats) {

            player.stats[stat] ??= 0;

            player.stats[stat] += stats[stat];

        }

    },

    // -------------------------
    // Finish
    // -------------------------

    finish() {

        const ending = getEnding(player);

        if (!save.endings.includes(ending.id)) {

            save.endings.push(ending.id);

        }

        save.playthroughs++;

        saveGame();

        UI.showEnding(ending);

    }

};
