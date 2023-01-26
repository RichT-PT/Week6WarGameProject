var deck = [];
var shuffledDeck = [];

// for(let i = 0; i < shuffledDeck.length; i++){
//     if(shuffledDeck[i + 1] % 2 == 0){
//         this.player1.push(shuffledDeck[i]);
//     }
//     else{
//         this.player2.push(shuffledDeck[i]);
//     }
//}
let indexer = 0;
let faceCards = ["Jack", "Queen", "King", "Ace"];
        for(let i = 1; i <= 10; i++){
            indexer += 1;
            deck.push(indexer);
        }
        deck.push(faceCards);
 console.log(indexer);
 console.log(deck);       
