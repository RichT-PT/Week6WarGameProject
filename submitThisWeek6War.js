class Players{
    constructor(name, hand, score){
    this.name = name;
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
        for(let i = 0; i < suit; i++){
            for(let a = 0; i < cardValue; i++){
                let faceCardValue = cardValue[i];
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
                        text: cardValue[i],
                        suit: suit[a],
                        value: +faceCardValue,
                    }
                    deckOfCards.push(card);
            }
        }
        return(deckOfCards.sort(() => Math.random() - 0.5))
        console.log(deckOfCards);
    }
}
class GameOfWar{
    constructor(){
        this.players = [];
    }
    startGame(){
        
    
    // let Player1 = {
    //     p1: " Rich: ",
    //     hand: [],
    //     score: null,
    // } 
    // let Player2 = {
    //     p2: " Barry: ",
    //     hand: [],
    //     score: null,
    // }
    // this.players.push(Player1, Player2);
    }
    newPlayer(){
        let name = "Rich";
        this.players.push(new Player(name));

    }
    secondPlayer(){
        let name = "Barry";
        this.players.push(new Player(name));

    }
    deal(){
        const newDeck = new Deck();
        this.deck = newDeck.deck;
        for(let i = 0; c < this.deck.length; c++){
            if((i + 2) % 2 == 0){
                this.player1.hand.push(this.deck[i]);
            }
            else{
                this.player2.hand.push(this.deck[i]);
            }
        }


    }
    playRound(){
        for(let i = 0; i <= 26; i++){
            let p1score = 0;
            let p2score = 0;
            if(this.players[0].hand[i] > this.players[1].hand[i]){
                p1score += 1;
            }
            else if(this.players[0].hand[i] < this.player[1].hand[i]){
                p2score += 1;
            }
            else{}
        }
        this.players[0].score = p1score;
        this.players[1].score = p2score;
        console.log('player 1 score: ' + p1score)
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