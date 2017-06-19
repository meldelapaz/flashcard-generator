// * This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:
//     `module.exports = BasicCard;`

//   * The constructor should accept two arguments: `front` and `back`.

//   * The constructed object should have a `front` property that contains the text on the front of the card.

//   * The constructed object should have a `back` property that contains the text on the back of the card.


//module.exports = BasicCard;

function flashCard(front,back) {
	this.front = front;
	this.back = back
}

var one = new flashCard("Who was the first president of the United States?", "George Washington");
console.log(one.front);

var command = process.argv[3];
if (command === flashcard.back) {
	console.log(one.back);
}