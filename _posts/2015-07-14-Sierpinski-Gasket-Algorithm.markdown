---
tag: Algorithms
javascript: sierpinskiGasket.js
codesnippet: true
---

This algorithm was one of the challenges from [Khan Acedemy](https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/the-sierpinksi-gasket).  This 
is what it basically looks like in the end.  How would you solve this recursively?


<style type="text/css">
	#canvas {
		border: 1px solid black;
		margin-right: 300px;
		margin-top: 12px;
	}

	#depth {
		font-weight: bold;
	}

	#plus,
	#minus
	 {
		width: 50px;
		margin-right: 20px;
		background-color: rgb(167, 167, 167);
		font-weight: bold;
	}

	#squares {
		width: 60px;
	}

	#minus {
		margin-left: 20px;
	}
</style>
Recursive Depth: <button id="plus">+</button><span id="depth">6</span><button id="minus">-</button>
<canvas id="canvas" width="400" height="400"></canvas>
<button id="squares">Only Squares</button>


And this is the code I used to do it.

<pre class="prettyprint">
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var WIDTH = c.width;
var HEIGHT = c.height;
var DEPTH = 6;
var GLOBALCOLOR = 111;

function sierp(ptX, ptY, WIDTH, depth) {
	if (depth === 0) {
		print(GLOBALCOLOR);
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
</pre>


So how do you think about even making that?  The way I solved it was by breaking it up into smaller pieces.  So first I focused on the top left sqaure and how you would recursively keep calling the top left square.  And then followed the same process for the top right and bottom right squares.














