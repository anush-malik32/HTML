const emojis=["💸","🔫","🗡","⚗️","🪄","🔒","🪅","🧼"];
let cards = [];
let flippedcards = [];
let matchedpairs = 0;
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
function checkMatch() {
    const [card1, card2] = flippedcards;
    if (card1.dataset.emoji == card2.dataset.emoji) {
        matchedpairs++;
        flippedcards = [];
        if (matchedpairs == emojis.length) {
            message.textContent = "You Win";
        }
    }
    else {
        setTimeout (
            ()=> {
                card1.classList.add("hidden");
                card2.classList.add("hidden");
                flippedcards = [];
            },1000
        );
    }
}