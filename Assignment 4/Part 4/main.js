/*
	Name: Liam Matthews
	File: main.js
	Date: 2024 April 5th
	Working with javascript, creating a pingpong physics simulator.
*/

// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random colour

function randomRGB() {
	return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Shape {
	constructor(x, y, velX, velY) {
		this.x = x;
		this.y = y;
		this.velX = velX;
		this.velY = velY;
	}
}

class Ball extends Shape {
	constructor(x, y, velX, velY, colour, size) {
		super(x, y, velX, velY);
		this.colour = colour;
		this.size = size;
	}

	draw() {
		ctx.beginPath();
		ctx.fillStyle = this.colour;
		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
		ctx.fill();
	}

	update() {
		if ((this.x + this.size) >= width) {
			this.velX = -(this.velX);
		}
	
		if ((this.x - this.size) <= 0) {
			this.velX = -(this.velX);
		}
	
		if ((this.y + this.size) >= height) {
			this.velY = -(this.velY);
		}
	
		if ((this.y - this.size) <= 0) {
			this.velY = -(this.velY);
		}
	
		this.x += this.velX;
		this.y += this.velY;
	}

	collisionDetect() {
		for (const ball of balls) {
			if (this !== ball) {
				const dx = this.x - ball.x;
				const dy = this.y - ball.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
			
				if (distance < this.size + ball.size) {
					ball.colour = this.colour = randomRGB();
				}
			}
		}
	}
}

const balls = [];

// User controlled Evil Ball.
class EvilBall extends Shape {
	constructor(x, y){
		// Create the shape for it.
		super(x, y, 20, 20);

		this.size = 10;

		this.colour = "rgb(255, 255, 255)";

		window.addEventListener("keydown", (e) => {
			switch (e.key) {
				case "a":
					this.x -= this.velX;
					break;
				case "d":
					this.x += this.velX;
					break;
				case "w":
					this.y -= this.velY;
					break;
				case "s":
					this.y += this.velY;
					break;
			}

			if ((this.x + this.size) >= width) {
				this.x = width - this.size;
			}
		
			if ((this.x - this.size) <= 0) {
				this.x = this.size;
			}
		
			if ((this.y + this.size) >= height) {
				this.y = height - this.size;
			}
		
			if ((this.y - this.size) <= 0) {
				this.y = this.size;
			}
		});
	}

	draw() {
		ctx.beginPath();
		ctx.strokeStyle = this.colour;
		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
		ctx.stroke();
	}

	collisionDetect() {
		// Iterate through all of the balls from the top.
		for(let ball_index = balls.length - 1; ball_index >= 0; ball_index--){
			// Get the ball
			const ball = balls[ball_index];

			// get the relative x
			let rx = ball.x - this.x;

			// get the relative y
			let ry = ball.y - this.y;

			// If they're within eachother.
			if (Math.sqrt(rx*rx + ry*ry) <= this.size + ball.size) {
				// Remove the ball.
				balls.splice(ball_index, 1)
			}
		}
	}
}

while (balls.length < 25) {
	const size = random(10, 20);
	const ball = new Ball(
		// ball position always drawn at least one ball width
		// away from the edge of the canvas, to avoid drawing errors
		random(0 + size, width - size),
		random(0 + size, height - size),
		random(-7, 7),
		random(-7, 7),
		randomRGB(),
		size,
	);

	balls.push(ball);
}

// Create the evil ball
const evilBall = new EvilBall(0, 0);

function loop() {
	ctx.fillStyle = "rgb(0 0 0 / 25%)";
	ctx.fillRect(0, 0, width, height);

	for (const ball of balls) {
		ball.draw();
		ball.update();
		ball.collisionDetect();
	}

	evilBall.draw();
	evilBall.collisionDetect();

	requestAnimationFrame(loop);
}

loop();