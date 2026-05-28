const emojis=["💸","🔫","🗡","⚗️","🪄","🔒","🪅","🧼"];
let cards = [];
let flippedcards = [];
const board= document.getElementById("gameboard");
const message= document.getElementById("message");

function shuffle(array) {
    for (let i = array.length-1; i>0; i--) {
        let j = Math.floor(Math.random()*(i + 1));
        [array[i],array[j]] = [array[j],array[i]];
    }
}
function flipcard() {
    if (flippedcards.length<2 && this.classList.contains("hidden")) {
        this.classList.remove("hidden");
        flippedcards.push(this);
    }       
    if (flippedcards.length==2) {
        checkMatch();
    }
}