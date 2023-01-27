// • Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// ◦ Use at least one array.
// ◦ Use at least two classes.
// ◦ Your menu should have the options to create, view, and delete elements.

// class card 
// card has Suit
// card has faceValues
// card has rank
// If I make a card class with all the cards, I can create a rank. Will that attach the rank with that element in the array of cards?
// If there is a rank attached to each card and I make a loop to attach the cards with each suit, will it carry the rank with it?


class Player {
    constructor(name) {
        this.name = name;
        this.score =0;
        this.hand = [];
    }
}
let player1 = new Player('Rich');
let player2 = new Player('Barry');
//console.log(player1);

class Deck {
    constructor(rank)  {
        this.deck = [];            
        this.deckWithSuits = [];       
        this.dealDeck = [];
        this.rank = [];
    }
}
class Hand {
    constructor(){
        this.handPlayer1 = [];
        this.handPlayer2 = [];
        this.hand = null;
    }
}
class Game {
    constructor(){
        this.dealtCardRankP1 = [];
        this.dealtCardRankP2 = [];
        this.dealtHand = null;

    }
}
start(){

    //method to create
    createDeck(){
        var deckHearts = [];
        var deckClubs = [];
        var deckSpades = [];
        var deckDiamonds = [];
        let faceCards = ["Jack", "Queen", "King", "Ace"];
        for(let i = 2; i <= 10; i++){
            //indexer += 1;   //set i @ 2 to eliminate the 1 and discovered I didn't even need this code
            this.deck.push(i);//populates the deck number cards
            
        }
        for(let i = 0; i < faceCards.length; i++){ // adds the face cards to my deck
        deck.push(faceCards[i]);
        }
        let suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];

        for(let i = 0; i < deck.length; i++){              //this next block adds the suits to each index of cards
            deckHearts.push(deck[i] + ' of ' + suits[0]);  // and creates a new array with the added suit
        }
        for(let i = 0; i < deck.length; i++){
            deckClubs.push(deck[i] + ' of ' + suits[1]);
        }
        for(let i = 0; i < deck.length; i++){
            deckSpades.push(deck[i] + ' of ' + suits[2]);
        }
        for(let i = 0; i < deck.length; i++){
            deckDiamonds.push(deck[i] + ' of ' + suits[3]);
        }  
        deckWithSuits.push(...deckClubs, ...deckDiamonds, ...deckHearts, ...deckSpades)
//console.log(deck[deck.length - 1]);
    }

}
dealToPlayers(){

function shuffleArray(arr) {
  arr.sort(() => Math.random() - 0.5);
}
let arr = [1, 2, 3, 4, 5];
shuffleArray(arr);
console.log(arr)

    for(let i = 0; i < shuffledDeck.length; i++){
        if(shuffledDeck[i + 1] % 2 == 0){
            this.player1.push(shuffledDeck[i]);
        }
        else{
            this.player2.push(shuffledDeck[i]);
        }
    }
}

    if(player1(player1[i]) > (player2(player2[i]))){
        let winningHand = [];
        winningHand.push("P1");
    }

    else{
        winningHand.push("P2");
    }  
    let compareWins1 = 0;
    let compareWins2 = 0; 
    for(let i = 0; i < winningHand.length; i++){
        if(winningHand(winningHand[i]) === "P1"){
            compareWins1 += winningHand[i]
        }
        else{
            compareWins2 += winningHand[i]
        }
        if(compareWins1 > compareWins2){
            window.alert("Player 1 Wins!!!");
        }
        else{
            window.alert("Player 2 Wins!!!");
        }
    }
}


let gameDeck = new Deck();
gameDeck.createDeck();
let card1 = new Card('2', 'Hearts', 2);
let card2 = new Card('Jack', 'Hearts', 11);
console.log(card1.rank);

let p1score = 0;
let p2score = 0;

if(card1.rank > card2.rank) {

    //do something
}

start