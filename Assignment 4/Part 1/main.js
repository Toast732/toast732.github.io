/*
	Name: Liam Matthews
	File: main.js
	Date: 2024 April 4th
	Working with javascript.
*/


/*


	Constants


*/

// Get the custom name attribute from the document.
const customNameInput = document.getElementById('customname');

// Get the generate button from the document.
const generateButton = document.querySelector('.randomize');

// Get the story output field from the document.
const storyOutputField = document.querySelector('.story');

// Store the text for the story.
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

// Store the options for insertx.
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas", "Pootis"]

// Store the options for inserty.
const insertY = ["the soup kitchen", "Disneyland", "the White House", "Your house"]

// Store the options for insertz.
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away", "ate a sandvich"]

/*


	Functions


*/

// Function for getting a random value from an array.
function randomValueFromArray(array){
	// Get the random index to get from the array.
	const random_index = Math.floor(Math.random() * array.length);

	// Return the random value from the array.
	return array[random_index];
}

