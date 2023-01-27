

// for(let i = 0; i < shuffledDeck.length; i++){
//     if(shuffledDeck[i + 1] % 2 == 0){
//         this.player1.push(shuffledDeck[i]);
//     }
//     else{
//         this.player2.push(shuffledDeck[i]);
//     }
//}

var deck = [];            //for loop just populates 1-10
var deckWithSuits = [];
var deckHearts = [];
var deckClubs = [];
var deckSpades = [];
var deckDiamonds = [];
var dealDeck = [];
var x = "";
let indexer = 0;
let faceCards = ["Jack", "Queen", "King", "Ace"];
        for(let i = 2; i <= 10; i++){
            //indexer += 1;   //set i @ 2 to eliminate the 1 and discovered I didn't even need this code
            deck.push(i);
            
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
//deckWithSuits.push(deckClubs + deckDiamonds + deckHearts + deckSpades);//concatenates the suits into a single deck
deckWithSuits.push(...deckClubs, ...deckDiamonds, ...deckHearts, ...deckSpades)
//console.log(deck[deck.length - 1]);
 //console.log(indexer);
// console.log(deck);  
// console.log(deckHearts + '\n' + deckClubs);
console.log(deckWithSuits);
console.log(deckWithSuits.length);
//  Such as String x =“” and then x+=num. that will
//   absorb the number into the string and you won’t have to change the data type.
