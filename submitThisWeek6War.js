class Player{
    constructor(nameValue){
    this.name = nameValue;
    this.hand = [];
    this.score = 0;
}
}

class Deck{
    constructor(){
        this.deck = this.makeADeck();
    }
    makeADeck = () => {
        const suit = [' of Clubs ', ' of Hearts ', ' of Spades ',' of Diamonds '];
        const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'k', 'A'];
        let deckOfCards = [];
        for(let i = 0; i < suit.length; i++){
           console.log("index:", i, "suit:", suit[i]);
            for(let a = 0; a < cards.length; a++){
               console.log("index:", a, "card:", cards[a]);
                let valueOfCards = [a + 2];
                switch(valueOfCards){
                    case 'J':
                        valueOfCards = 11;
                        break;
                    case 'Q':
                            valueOfCards = 12;
                            break;
                    case 'k':
                            valueOfCards = 13;
                            break;
                    case 'A':
                            valueOfCards = 14;
                            break;
                    default:   
                    }
                    const card = {
                        text: cards[a],
                        suit: suit[i],
                        value: +valueOfCards,
                    }
                    deckOfCards.push(card);
                    
            }
        }
        //console.log("make a deck array", deckOfCards);
        return(deckOfCards.sort(() => Math.random() - 0.5))
        
    }
}
class GameOfWar{
    constructor(){
        this.players = [];
    }
    startGame(){
        
    var myNewDeck = new Deck();
   // console.log('shuffled',myNewDeck.deck);//ANCHOR - must reference the specific instance of the class

    let Player1 = new Player("Rich");
    let Player2 = new Player("Barry");
    //console.log(Player1.name);
    this.players.push(Player1, Player2);
    //console.log(this.players[0]);
    
    for(let i = 0; i < myNewDeck.deck.length; i++){
        if(i % 2 === 0){
            this.players[0].hand.push(myNewDeck.deck[i]);
        }
        else{
            this.players[1].hand.push(myNewDeck.deck[i]);
        }
    }  
    console.log("line 74 this.players[0]", this.players[0].hand[8]);//ANCHOR - this in fact logs the specific index 8 of hand and shows
    // let Player2 = {                                               //the values as a property. how do i isolate the property value to use 
    //     p2: " Barry: ",                                           // in the compare method?
    //console.log(this.player[0].hand[8]);
    
    //     hand: [],
    //     score: null,
    // }
    // this.players.push(Player1, Player2);
    }
    // newPlayer(){
    //     let name = "Rich";
    //     this.players.push(new Player(name));

    // }
    // secondPlayer(){
    //     let name = "Barry";
    //     this.players.push(new Player(name));

    // }
    
    playRound(){
       // console.log('does playRound work?');
        for(let i = 0; i <= 26; i++){
            let p1score = 0;
            let p2score = 0;
            if(this.players[0].hand[i].value > this.players[1].hand[i].value){
                p1score += 1;
                
            }
            else if(this.players[0].hand[i].value < this.players[1].hand[i].value){
                p2score += 1;
            }
            else{}
        this.players[0].score = p1score;
        this.players[1].score = p2score;
        console.log(this.players[0].hand[i], 'player 1 score: ', this.players[0].score);
        console.log(this.players[1].hand[i], 'Player 2 score: ', this.players[1].score);
        }
    console.log(this.players[0].hand);    
        
    }
    tallyWinner(){
        if(this.players[0].Score > this.players[1].Score){
            console.log("Player 1 is the winner!!!");
        }else if(this.players[1].Score > this.players[0].Score){
            console.log("Player 2 is the winner!!!");
        }
        else{
            console.log("We have a Tie !!!");
        }
console.log("line 119 this.players.hand.value", this.player.hand.value);
    }
}
let game = new GameOfWar();
game.startGame();
game.playRound();
game.tallyWinner();