//CONNECTING THE RUNAPP.JS WHERE THE CONSTRUCTORS ARE
var runapp = require('./runapp.js');

//INQUIRER NPM PACKAGE
var inquirer = require('inquirer');

//CREATING THE FLASHCARDS ------------------------------------
var one   = new runapp.flashCard("In S1E1 Pilot: Who started their first day at Dunder Mifflin Scranton?", "ryan howard");

var two   = new runapp.flashCard("In S1E2 Diversity Day: What famous comedian's stand up routine does Michael imitate?", "chris rock");

var three = new runapp.flashCard("In the episode Spooked, who do we find out is deathly afraid of mummies?", "kevin malone");

var four  = new runapp.flashCard("Who plays Michael Scott?", "steve carell");

var five  = new runapp.flashCard("Who does Michael hate more than anyone in the world?", "toby flenderson");

//INQUIRER PROMPTS -------------------------------
inquirer.prompt([
	{
		type: 'input',
		message: one.front,
		name: 'Uno'
	},
	{
		type: 'input',
		message: two.front,
		name: 'Dos'
	},
	{
		type: 'input',
		message: three.front,
		name: 'Tres'
	},
	{
		type: 'input',
		message: four.front,
		name: 'Quatro'
	},
	{
		type: 'input',
		message: five.front,
		name: 'Cinco'
	}

//RESULTS/ANSWERS ----------------------------------------
]).then(function (inquirer) {
	
	if (inquirer.Uno === one.back) {
	
		console.log('Correct')
	
	} else {
	
		console.log('Wrong! Correct Answer: ' + one.back)
	
	}
	
	if (inquirer.Dos === two.back) {
	
		console.log('Correct')
	
	} else {
	
		console.log('Wrong! Correct Answer: ' + two.back)
	
	}
	
	if (inquirer.Tres === three.back) {
	
		console.log('Correct')
	
	} else {
	
		console.log('Wrong! Correct Answer: ' + three.back)
	
	}
	
	if (inquirer.Quatro === four.back) {
	
		console.log('Correct')
	
	} else {
	
		console.log('Wrong! Correct Answer: ' + four.back)
	
	}
	
	if (inquirer.Cinco === five.back) {
	
		console.log('Correct')
	
	} else {
	
		console.log('Wrong! Correct Answer: ' + five.back)
	
	}

});
