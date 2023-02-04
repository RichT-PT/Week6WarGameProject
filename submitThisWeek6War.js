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
        const cardValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'k', 'A'];
        let deckOfCards = [];
        for(let i = 0; i < suit.length; i++){
            //console.log("index:", i, "suit:", suit[i]);
            for(let a = 0; a < cardValue.length; a++){
            //    console.log("index:", a, "card:", cardValue[a]);
                let faceCardValue = cardValue[a];
                switch(faceCardValue){
                    case 'J':
                        faceCardValue = 11;
                        break;
                    case 'Q':
                            faceCardValue = 12;
                            break;
                    case 'k':
                            faceCardValue = 13;
                            break;
                    case 'A':
                            faceCardValue = 14;
                            break;
                    default:   
                    }
                    const card = {
                        text: cardValue[a],
                        suit: suit[i],
                        value: +faceCardValue,
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
    console.log('line 74 player hands', this.players[0].hand);//, this.players[1].hand);
   // console.log(this.players);  
    // let Player2 = {
    //     p2: " Barry: ",
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
        console.log('does playRoung work?');
        for(let i = 0; i <= 26; i++){
            let p1score = 0;
            let p2score = 0;
            if(this.players[0].hand[i].value > this.players[1].hand[i].value){
                p1score += 1;
                
            }
            else if(this.players[0].hand[i].value < this.players[1].hand[i].value){
                p2score += 1;
            }
            else{
                console.log("we have a tie");
            }
        console.log('players score: ', p1score, p2score);    
        
        this.players[0].score = p1score;
        this.players[1].score = p2score;
        console.log("playRound player1 hand", this.players[0]);

        }
    }
    tallyWinner(){
        if(this.players[0].Score > this.players[1].Score){
            console.log("Player 1 is the winner!!!");
        }else if(this.player[1].Score > this.players[0].Score){
            console.log("Player 2 is the winner!!!");
        }
        else{
            console.log("We have a Tie !!!");
        }
    }
}
let game = new GameOfWar();
game.startGame();
game.playRound();
game.tallyWinner();