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

// Store the options for insertx.
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas", "Pootis"];

// Store the options for inserty.
const insertY = ["the soup kitchen", "Disneyland", "the White House", "Your house"];

// Store the options for insertz.
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away", "ate a sandvich"];

/*


	Functions


*/

// Function for getting the story text.
function getStoryText(name, insertX, insertY, insertZ, temp, weight){
	return `It was ${temp} outside, so ${insertX} went for a walk. When they got to ${insertY}, they stared in horror for a few moments, then ${insertZ}. ${name} saw the whole thing, but was not surprised — ${insertX} weighs ${weight}, and it was a hot day.`
}

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
	let name = customNameInput.value;

	// Define the temperature.
	let temperature = "94 fahrenheit"

	// Define the weight
	let weight = "300 pounds"

	// If the odjwakjd is set to the UK, convert the weight to stones, and the temperature to celcius.
	if(document.getElementById("uk").checked) {

		// convert the weight to stones
		weight = Math.round(300/14) + " stones";

		// convert the temperature to celsius.
		temperature = Math.round((94-32)*0.55555555555) + " centigrade";
	}

	// Get the item to replace insertx with in the story.
	let itemX = randomValueFromArray(insertX);

	// Get the item to rpelace inserty with in the story.
	let itemY = randomValueFromArray(insertY);

	// Get the item to replace insertz with in the story.
	let itemZ = randomValueFromArray(insertZ);

	// If the name has not been set, then set name to bob.
	if(!name){
		name = "Bob";
	}

	storyOutputField.textContent = getStoryText(name, itemX, itemY, itemZ, temperature, weight);
	storyOutputField.style.visibility = 'visible';
}