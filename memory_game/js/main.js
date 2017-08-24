 console.log("Up and running!");

 var cards = [
   {
 	   	rank: "Queen",
 	 	suit: "Hearts",
 	 	cardImage: "memory_game/images/queen-of-hearts.png"
 	},
 	{
 		rank: "Queen",
 		suit: "Diamonds",
 		cardImage: "memory_game/images/queen-of-diamonds.png"
 	},
 	{
 		rank: "King",
 		suit: "Hearts",
 		cardImage: "memory_game/images/king-of-hearts.png"
 	},
 	{
 		rank: "King",
 		suit: "Diamonds",
 		cardImage: "memory_game/images/king-of-diamonds.png"
 	}
 ];
 var cardsInPlay = [];
 cardsInPlay.length;

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  	window.alert("You found a match!");
  } else {
  	window.alert("Sorry, try again!");
  }
};
/*
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
*/


//flip card function below:

var flipCard = function (cardId) {
var cardOne = cards[0];
var cardTwo = cards[2];
  console.log("User flipped " + /*cards[cardId]*/cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
//**Redundant code**// 	
/* 	
var cardTwo = cards[2];
 console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[CardId]);
*/

//**Broken Code??**//
/*
   if (cardsInPlay.length === 2)
  } else if (cardsInPlay[0] === cardsInPlay[1]);
	  window.alert("You Found a match!");
  } else if (cardsInPlay[0] !== cardsInPlay[1]) {
	  window.alert("Sorry! Try again.");
  }
  */
  checkForMatch();

};
flipCard(0);
flipCard(2);






