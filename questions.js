// =====================================
// THE INTERVIEW
// QUESTIONS
// =====================================

const QUESTIONS = [

{
    speaker: "Interviewer",

    text: "Tell me... why are you here?",

    choices: [

        {
            text: "Because I need this job.",

            stats:{
                honesty:2,
                ambition:1
            }
        },

        {
            text: "Because someone told me to come.",

            stats:{
                obedience:2
            }
        },

        {
            text: "I don't remember coming here.",

            stats:{
                curiosity:1,
                fear:1
            }
        },

        {
            text: "Who says I'm here?",

            stats:{
                confidence:2,
                curiosity:2
            }
        }

    ]

},

{
    speaker:"Interviewer",

    text:"A stranger collapses in front of you. No one else is around. What do you do?",

    choices:[

        {

            text:"Help immediately.",

            stats:{
                empathy:3,
                morality:2
            }

        },

        {

            text:"Call for help first.",

            stats:{
                caution:2,
                morality:1
            }

        },

        {

            text:"Walk away.",

            stats:{
                ambition:1,
                morality:-3
            }

        },

        {

            text:"Search their pockets.",

            stats:{
                greed:3,
                morality:-4
            }

        }

    ]

},

{
    speaker:"Interviewer",

    text:"Have you ever lied to protect someone?",

    choices:[

        {

            text:"Yes.",

            stats:{
                empathy:2,
                honesty:-1
            }

        },

        {

            text:"Never.",

            stats:{
                honesty:3
            }

        },

        {

            text:"Depends who it is.",

            stats:{
                morality:1,
                ambition:1
            }

        },

        {

            text:"I'd lie if it benefited me.",

            stats:{
                greed:2,
                morality:-2
            }

        }

    ]

}

];
