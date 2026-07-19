const QUESTIONS = [

    {
        speaker: "Interviewer",

        text: "Why are you here?",

        choices: [

            {
                text: "I need the job.",
                stats: {
                    honesty: 2,
                    ambition: 1
                }
            },

            {
                text: "Someone told me to come.",
                stats: {
                    obedience: 2
                }
            },

            {
                text: "I don't remember.",
                stats: {
                    fear: 1,
                    curiosity: 2
                }
            },

            {
                text: "Why does it matter?",
                stats: {
                    confidence: 2
                }
            }

        ]
    },

    {
        speaker: "Interviewer",

        text: "A child steals bread. What do you do?",

        choices: [

            {
                text: "Buy it for them.",
                stats: {
                    empathy: 3,
                    morality: 2
                }
            },

            {
                text: "Report them.",
                stats: {
                    obedience: 2,
                    morality: -1
                }
            },

            {
                text: "Ignore it.",
                stats: {
                    caution: 1
                }
            },

            {
                text: "Steal something too.",
                stats: {
                    greed: 3,
                    morality: -3
                }
            }

        ]
    }

];
