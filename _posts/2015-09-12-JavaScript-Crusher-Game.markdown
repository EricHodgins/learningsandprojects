---
tag: Javascript
javascript: crusherGame.min.js
codesnippet: true
---

Here's my game!  Objective collect as many coins as you can.  Just don't get crushed at the top or fall down too far.  You will die.  Use the arrow keys on the
keyboard to move around. Here it is on github.  [CrusherGame](https://github.com/EricHodgins/CrusherJSGame)

<style type="text/css">
	#game-canvas {
		border: 1px solid black;
		background-color: black;
	}
</style>

<div id="game">
			<canvas id="game-canvas" width="480" height="520"></canvas>
</div>


The tools I used to help build it were [easeljs](http://www.createjs.com/easeljs), and used [npm](https://www.npmjs.com/) to use [Gulp](http://gulpjs.com/) to concatenate, minify and rename the JavaScript files.