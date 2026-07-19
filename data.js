// =====================================
// THE INTERVIEW
// DATA
// =====================================

// ---------- Player ----------

const player = {

    answers: [],

    stats: {}

};

// ---------- Save ----------

let save = JSON.parse(

    localStorage.getItem("theInterviewSave")

) || {

    playthroughs: 0,

    endings: [],

    achievements: []

};

// ---------- Achievements ----------

const ACHIEVEMENTS = [

    // Fill later

];

// ---------- Helpers ----------

function saveGame(){

    localStorage.setItem(

        "theInterviewSave",

        JSON.stringify(save)

    );

}

function resetPlayer(){

    player.answers = [];

    player.stats = {};

}
