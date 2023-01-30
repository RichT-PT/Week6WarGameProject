// class card 
// card has Suit
// card has faceValues
// card has rank
// If I make a card class with all the cards, I can create a rank. Will that attach the rank with that element in the array of cards?
// If there is a rank attached to each card and I make a loop to attach the cards with each suit, will it carry the rank with it
class Player{                    // the hand has to be created after the deck methods are finished. grabbing the hand from the
                                 // deck class for each player. seems like the best way to do this since I have to create 2 distinct 
    constructor(name, hand){     // instances of players with seperate properties
        this.name = name;
        this.hand = [];
    }
}
class Deck{                      //since more than one method needs access to the deck, I decided to make a deck class
    constructor(deck2){         
        this.deck2 = deck2;          // the deck array changes several times in the method used to make the deck this is the shuffled deck
        this.P1Hand = null;     //when the instance of a player is created, I want this property to be passed into the hand property of 
        this.p2Hand = null;     //that player
    }
}
class Game{
    constructor(){
        this.selectedPlayer = null;
       // this.player1Score = p1score;
        //this.player2Score = p2score;
    }
    start(){
       // let name1 = prompt("Please enter the name for Player 1: \n");
        //let name2 = prompt("Please enter the name for Player 2: \n");
   // var name1 = 'Barry';
   //var name2 = 'Rich';
    


    }
    createDeckShuffleDeal(){
        var deck = [];
        let suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
        let cards = ['2','3','4','5','6','7','8','9','10', 'J',' Q', 'K','A'];

        for(let i = 0; i < suits.length; i++){
            for(let a = 0; a < cards.length; a++){
                deck.push(cards[a] + ' of ' + suits[i]);
            }
        }
        deck.sort(() => 0.5 - Math.random());
        this.deck2.push(new Deck(deck));
        
        console.log(deck);
        console.log(deck.length);


        var handP1 = [];
        var handP2 = [];
        for(let i = 0; i <this.deck.length; i++){
            if(i % 2 == 0){
                handP1.push(this.deck[i]);
            }
            else{
                handP2.push(this.deck[i]);
            }
        }
        this.P1Hand.push(new Deck(handP1));
        this.p2Hand.push(new Deck(handP2));
    }

// console.log(this.shuffledDeck);
// console.log(handP1);
// console.log(handP2);
  
    // valueHand(){
    //     var value = [];
    //     for(let i = 0; i < hand.length; i++){
    //         value = hand[i];
    //     }
    // }
    createPlayer1(){
        let name1 = "Barry";
        this.name.push(new Player(name1, this.P1Hand));
        


    }
    createPlayer2(){
        let name2 = "Rich";
        this.name.push(new Player(name1, this.p2Hand));
    }
}
console.log(Deck);
    let newRound = new Game();
    newRound.createDeckShuffleDeal()