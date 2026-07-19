// =====================================
// THE INTERVIEW
// ENDINGS
// =====================================

const ENDINGS = [

    {
        id: "good",

        title: "The Ideal Candidate",

        description:
            "The interviewer smiles for the first time. 'We'll be in touch.' As you leave, you realize nobody else is waiting outside."
    },

    {
        id: "bad",

        title: "Rejected",

        description:
            "The file is closed. The lights go out. When they return, the room is empty except for your chair."
    }

];

function getEnding(player) {

    const stats = player.stats;

    if ((stats.empathy || 0) >= 3) {
        return ENDINGS[0];
    }

    return ENDINGS[1];

}
