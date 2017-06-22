// * This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
//     `module.exports = ClozeCard;`

//   * The constructor should accept two arguments: `text` and `cloze`.

//   * The constructed object should have a `cloze` property that contains _only_ the cloze-deleted portion of the text.

//   * The constructed object should have a `partial` property that contains _only_ the partial text.

//   * The constructed object should have a `fullText` property that contains _only_ the full text.

//   * The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.

//   * Use prototypes to attach these methods, wherever possible.

//CONSTRUCTOR TO MAKE NEW CARDS ----------------
function clozeCard(clozeDeleted, clozePartial, clozeFull) {
	this.clozeDeleted = clozeDeleted;
	this.clozePartial = clozePartial;
	this.clozeFull = clozeFull;
};


//FLASHCARDS ------------------------------------
var one = new clozeCard("ryan howard", "In S1E1 Pilot: ... started their first day at Dunder Mifflin Scranton?", "In S1E1 Pilot: Ryan Howard started their first day at Dunder Mifflin Scranton?");

var two = new clozeCard("chris rock", "In S1E2 Diversity Day: Michael immitates ...'s famous comedy stand up routine.", "In S1E2 Diversity Day: Michael immitates Chris Rock's famous comedy stand up routine.");

var three = new clozeCard("kevin malone", "In the episode Spooked, we find out that ... is deathly afraid of mummies.", "In the episode Spooked, we find out that Kevin Malone is deathly afraid of mummies.");

// var four = new flashCard("Who plays Michael Scott?", "steve carell");

// var five = new flashCard("Who does Michael hate more than anyone in the world?", "toby flenderson");


//INQUIRER PROMPTS -------------------------------
var inquirer = require('inquirer');


inquirer.prompt([/* Pass your questions in here */
	{
		type: 'input',
		message: one.clozePartial,
		name: 'Uno'
	},
	{
		type: 'input',
	 	message: two.clozePartial,
		name: 'Dos'
	},
	{
		type: 'input',
		message: three.clozePartial,
		name: 'Tres'
	}
	// {
	// 	type: 'input',
	// 	message: four.clozePartial,
	// 	name: 'Quatro'
	// }
	// {
	// 	type: 'input',
	// 	message: five.front,
	// 	name: 'Cinco'
	// }

]).then(function (inquirer) {
	if (inquirer.Uno === one.clozeDeleted) {
		console.log('Correct')
	} else {
		console.log('Wrong! Correct Answer: ' + one.clozeDeleted)
	}
	if (inquirer.Dos === two.clozeDeleted) {
		console.log('Correct')
	} else {
		console.log('Wrong! Correct Answer: ' + two.clozeDeleted)
	}
	if (inquirer.Tres === three.clozeDeleted) {
		console.log('Correct')
	} else {
		console.log('Wrong! Correct Answer: ' + three.clozeDeleted)
	}
	// if (inquirer.Quatro === four.clozeDeleted) {
	// 	console.log('Correct')
	// } else {
	// 	console.log('Wrong! Correct Answer: ' + four.clozeDeleted)
	// }
	// if (inquirer.Cinco === five.back) {
	// 	console.log('Correct')
	// } else {
	// 	console.log('Wrong! Correct Answer: ' + five.back)
	// }
});