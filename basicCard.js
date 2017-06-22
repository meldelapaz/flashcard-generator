// * This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:
//     `module.exports = BasicCard;`

//   * The constructor should accept two arguments: `front` and `back`.

//   * The constructed object should have a `front` property that contains the text on the front of the card.

//   * The constructed object should have a `back` property that contains the text on the back of the card.


//CONSTRUCTOR TO MAKE NEW CARDS ----------------
function flashCard(front,back) {
	this.front = front;
	this.back = back
};


//FLASHCARDS ------------------------------------
var one = new flashCard("In S1E1 Pilot: Who started their first day at Dunder Mifflin Scranton?", "ryan howard");

var two = new flashCard("In S1E2 Diversity Day: What famous comedian's stand up routine does Michael imitate?", "chris rock");

var three = new flashCard("In the episode Spooked, who do we find out is deathly afraid of mummies?", "kevin malone");

var four = new flashCard("Who plays Michael Scott?", "steve carell");

var five = new flashCard("Who does Michael hate more than anyone in the world?", "toby flenderson");


//INQUIRER PROMPTS -------------------------------
var inquirer = require('inquirer');
//var total = 0;

// inquirer.prompt([/* Pass your questions in here */
// 	{
// 		type: 'input',
// 		message: one.front,
// 		name: 'questionOne'
// 	}
// ]).then(function (answers) {
//     if (inquirer.one === one.back) {
//     	console.log('Correct');
//     	//total++;
//     } else {
//     	console.log('Wrong! Correct Answer: ' + one.back)
//     }


// 	inquirer.prompt([
// 		{
// 			type: 'input',
// 			message: two.front,
// 			name: 'two'
// 		}
// 	]).then(function (answers) {
// 		if (inquirer.two === two.back) {
// 	    	console.log('Correct')
// 	    } else {
// 	    	console.log('Wrong! Correct Answer: ' + two.back)
// 	    }


// 		inquirer.prompt([
// 			{
// 				type: 'input',
// 				message: three.front,
// 				name: 'three'
// 			}
// 		]).then(function (answers) {
// 			if (inquirer.three === three.back) {
// 		    	console.log('Correct')
// 		    } else {
// 		    	console.log('Wrong! Correct Answer: ' + three.back)
// 		    }


// 			inquirer.prompt([
// 				{
// 					type: 'input',
// 					message: four.front,
// 					name: 'four'
// 				}
// 			]).then(function (answers) {
// 				if (inquirer.four === four.back) {
// 			    	console.log('Correct')
// 			    } else {
// 			    	console.log('Wrong! Correct Answer: ' + four.back)
// 			    }


// 				inquirer.prompt([
// 					{
// 						type: 'input',
// 						message: five.front,
// 						name: 'five'
// 					}
// 				]).then(function (answers) {
// 					if (inquirer.five === five.back) {
// 				    	console.log('Correct')
// 				    } else {
// 				    	console.log('Wrong! Correct Answer: ' + five.back)
// 				    }
// 				});
// 			});
// 		});
// 	});
// });

inquirer.prompt([/* Pass your questions in here */
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

//ANSWERS -------------------------------------------
// ]).then(function (answers) {
//     if (inquirer.one === one.back) {
//     	console.log('Correct')
//     } else {
//     	console.log('Wrong! Correct Answer: ' + one.back)
//     }
//     if (inquirer.two === two.back) {
//     	console.log('Correct')
//     } else {
//     	console.log('Wrong! Correct Answer: ' + one.back)
//     }
//     if (inquirer.three === three.back) {
//     	console.log('Correct')
//     } else {
//     	console.log('Wrong! Correct Answer: ' + one.back)
//     }
//     if (inquirer.four === four.back) {
//     	console.log('Correct')
//     } else {
//     	console.log('Wrong! Correct Answer: ' + one.back)
//     }
//     if (inquirer.five === one.five) {
//     	console.log('Correct')
//     } else {
//     	console.log('Wrong! Correct Answer: ' + one.back)
//     }
// });


//module.exports = basicCard;
