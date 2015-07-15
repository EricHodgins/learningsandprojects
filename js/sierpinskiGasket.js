function print(str) {
	console.log(str);
}

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var WIDTH = c.width;
var HEIGHT = c.height;
var GLOBALCOLOR = 111;
var DEPTH = 6;


// Buttons on page to adjust depth and show only squares
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var squares = document.getElementById("squares");
var depth_ui = document.getElementById("depth");
var MAX_DEPTH = 8;
var MIN_DEPTH = 0;


function drawSquares(ptX, ptY, WIDTH, depth) {
	if (depth === 0) {
		return;
	}
	// TOP LEFT
	ctx.rect(ptX, ptY, WIDTH/2, WIDTH/2);
	ctx.stroke();

	// TOP RIGHT
	ctx.rect(ptX + WIDTH/2, ptY, WIDTH/2, WIDTH/2);
	ctx.stroke();

	// BOTTOM RIGHT
	ctx.rect(ptX + WIDTH/2, ptY + WIDTH/2, WIDTH/2, WIDTH/2);
	ctx.stroke();

	drawSquares(ptX, ptY, WIDTH/2, depth - 1); // UL
	drawSquares(ptX + WIDTH/2, ptY, WIDTH/2, depth - 1); // UR
	drawSquares(ptX + WIDTH/2, ptY + WIDTH/2, WIDTH/2, depth - 1); // BR
}



function sierp(ptX, ptY, WIDTH, depth) {
	if (depth === 0) {
		GLOBALCOLOR += 1;
		if (GLOBALCOLOR > 999) {
			GLOBALCOLOR = 111;
		}

		ctx.fillStyle = '#' + GLOBALCOLOR;
		ctx.fillRect(ptX, ptY, WIDTH, WIDTH);
		return;
	}

	sierp(ptX, ptY, WIDTH/2, depth - 1); // UL
	sierp(ptX + WIDTH/2, ptY, WIDTH/2, depth - 1); // UR
	sierp(ptX + WIDTH/2, ptY + WIDTH/2, WIDTH/2, depth - 1); // BR
}


sierp(0, 0, WIDTH, DEPTH);


plus.onclick = function() {
	var d = parseInt(depth_ui.innerHTML);
	if (d < MAX_DEPTH) {
		d += 1;
		depth_ui.innerHTML = d;
		ctx.clearRect(0, 0, WIDTH, HEIGHT);
		sierp(0, 0, WIDTH, d);
	}

}

minus.onclick = function() {
	var d = parseInt(depth_ui.innerHTML);
	if (d > MIN_DEPTH) {
		d -= 1;
		depth_ui.innerHTML = d;
		ctx.clearRect(0, 0, WIDTH, HEIGHT);
		sierp(0, 0, WIDTH, d);
	}
}

squares.onclick = function() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	drawSquares(0, 0, WIDTH, DEPTH);
}










