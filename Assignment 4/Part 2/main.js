/*
	Name: Liam Matthews
	File: main.js
	Date: 2024 April 4th
	Working with javascript, creating an image gallery.
*/


/*


	Constants


*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/*


	Classes


*/

// Create a class for the selectable images.
class SelectableImage {

	filePath = "";
	altText = "";

	constructor(filePath, altText){
		this.filePath = filePath;
		this.altText = altText;

		// Create the image on the document.
		this.image = document.createElement('img');

		// Set the src attribute.
		this.image.setAttribute('src', this.filePath);

		// Set the alt text
		this.image.setAttribute('alt', this.altText);

		// Make it able to be keyboard focusable via tab.
		this.image.setAttribute('tabindex', 0);

		// Bind setActive to this, to ensure this is being sent as this (as otherwise, it's something else for some reason).
		this.setActive = this.setActive.bind(this);

		// Add a click listener, to set this image as active when clicked.
		this.image.addEventListener('click', this.setActive);

		// Call the setActive function when this element is focused, and Space or Enter is pressed.
		this.image.addEventListener('keyup', event => {
			// If the key was Space or Enter.
			if (event.code === "Space" || event.code === "Enter"){
				// Set this to be the active image.
				this.setActive();
			}
		});
	}

	// Call to set this image as the active image.
	setActive(){
		// Set the src to this file path.
		displayedImage.setAttribute('src', this.filePath);

		// Set the alt text to this alt text.
		displayedImage.setAttribute('alt', this.altText);
	}
}

/*


	Class Constants


*/

// Create an array of the selectableImages
const selectableImages = [
	new SelectableImage(
		"images/pic1.jpg",
		"Closeup of a face, with visual attention drawn to their eye."
	),
	new SelectableImage(
		"images/pic2.jpg",
		"A picture of an artwork, with light blue and light orange waves."
	),
	new SelectableImage(
		"images/pic3.jpg",
		"White and purple flowers from an above view."
	),
	new SelectableImage(
		"images/pic4.jpg",
		"A picture of an Ancient Egyptian wall painting."
	),
	new SelectableImage(
		"images/pic5.jpg",
		"A picture of a butterfly on a leaf pedal of a plant."
	)
]

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */
for(let imageIndex = 0; imageIndex < selectableImages.length; imageIndex++) {
	// Get the selectableImage
	let selectableImage = selectableImages[imageIndex];

	// Add the image to the thumbBar.
	thumbBar.appendChild(selectableImage.image);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", invertLightnessState)

// The function for inverting the image's lightness state.
function invertLightnessState(){
	// If the class name is "dark", set it to light.
	if(btn.getAttribute("class") == "dark"){
		// Set it to light.
		btn.setAttribute("class", "light");

		// Set the textContent to "Lighten".
		btn.textContent = "Lighten";

		// Set the overlay to 50%
		overlay.style.backgroundColor = "rgb(0 0 0 / 50%)"
	} else {
		// Otherwise, set it to dark.
		btn.setAttribute("class", "dark");

		// Set the textContent to "Darken".
		btn.textContent = "Darken";

		// Set the overlay to 0%
		overlay.style.backgroundColor = "rgb(0 0 0 / 0%)"
	}
}