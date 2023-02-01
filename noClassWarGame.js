var cards = [2,3,4,5,6,7,8,9,10,11,12,13,14];
var deck = [];
for(let i = 0; i < 4; i++){
    for(let x = 0; x < cards.length; x++){
        deck.push(cards[x]);
    }
    deck.sort(() => 0.5 - Math.random());
}
var p1 = [];
var p2 = [];
for(let i = 0; i < deck.length; i++){
    if(i % 2 == 0){
        p1.push(deck[i]);
    }
    else{
        p2.push(deck[i]);
    }
}
var p1Score = 0;
var p2Score = 0;


    for(let i = 0; i < p1.length; i++){
       
        p1Score += p1[i];
    }
    for( let i = 0; i < p2.length; i++){
        p2Score += p2[i];
        
    }
    console.log(deck);
    console.log(deck.length);
    console.log('player 1 score: ' + p1Score);
    console.log('player 2 score: ' + p2Score);
    if(p1Score > p2Score){
        console.log("Player 1 is the winner!!!");
    }
    else{
        console.log("Player 2 is the winner!!!");
    }
    