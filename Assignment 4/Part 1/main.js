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
const generateStoryButton = document.querySelector('.randomize');

// Get the story output field from the document.
const storyOutputField = document.querySelector('.story');

// Store the text for the story.
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// Store the options for insertx.
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas", "Pootis"];

// Store the options for inserty.
const insertY = ["the soup kitchen", "Disneyland", "the White House", "Your house"];

// Store the options for insertz.
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away", "ate a sandvich"];

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

// Add the result function to be called upon clicking the generateStoryButton.
generateStoryButton.addEventListener('click', result);

function result() {

	// Set this to the custom name input.
	const name = customNameInput.value;

	// Clone the storyText, so we can modify it.
	let newStory = storyText;

	// If the odjwakjd is set to the UK, convert the weight to stones, and the temperature to celcius.
	if(document.getElementById("uk").checked) {

		// convert the weight to stones
		const weight = Math.round(300/14) + " stones";

		// convert the temperature to celsius.
		const temperature = Math.round((94-32)*0.55555555555) + " centigrade";

		// Replace the weight in the story with the converted weight
		newStory = newStory.replaceAll("300 pounds", weight);

		// Replace the temperature in the story with the converted temperature.
		newStory = newStory.replaceAll("94 fahrenheit", temperature);
	}

	// Get the item to replace insertx with in the story.
	let itemX = randomValueFromArray(insertX);

	// Get the item to rpelace inserty with in the story.
	let itemY = randomValueFromArray(insertY);

	// Get the item to replace insertz with in the story.
	let itemZ = randomValueFromArray(insertZ);

	// If the name has been set, then replace "Bob" in the story with the custom name.
	if(name){
		newStory = newStory.replaceAll("Bob", name);
	}

	// Replace :insertx: with itemX
	newStory = newStory.replaceAll(":insertx:", itemX);

	// Replace :insertx: with itemX
	newStory = newStory.replaceAll(":inserty:", itemY);

	// Replace :insertx: with itemX
	newStory = newStory.replaceAll(":insertz:", itemZ);

	storyOutputField.textContent = newStory;
	storyOutputField.style.visibility = 'visible';
}