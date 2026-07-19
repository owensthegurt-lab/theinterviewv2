const ENDINGS = [
    {
        id: "good",
        title: "The Ideal Candidate",
        description: "The interviewer smiles. The interview is over."
    },

    {
        id: "bad",
        title: "Rejected",
        description: "The lights turn off. Nobody comes back."
    }
];


function getEnding(player) {

    if (player.stats.empathy >= 3) {
        return ENDINGS[0];
    }

    return ENDINGS[1];

}
