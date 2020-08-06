
// vibes array
const vibes = [
    "... and you are awesome!" ,
    "... have a wondderful day!" ,
    "... and you've got this!" ,
    "... and so is puppy 🐶"
]

// choose a random vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// display the vibe
document.querySelector(".vibe").append(vibe);
