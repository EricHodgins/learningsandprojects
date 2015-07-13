function println(string) {
	console.log(string);
}

// Get canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "black";
ctx.font = "18px monospace";

var leftMargin = 20;

var insert = function(array, rightIndex, value) {
	var i
    for (i = rightIndex;i >= 0 && array[i] > value; i--) {
    	array[i + 1] = array[i];
    }

    array[i + 1] = value;
};


var insertionSort = function(array) {
    for(var i = 1; i < array.length ; i++) {
        insert(array, i - 1, array[i]);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);


function sortNewNums() {
	var validInput = true;
	a = document.getElementById("number").value;
	a = a.replace(/\s\s+/g,' ');
	a = a.split(" ");

	// remove whitespace at end, if there's any
	if (a[a.length - 1] === "") {
		a.pop();
	}

	aNum = [];
	for (var i = 0; i < a.length; i++) {
		aNum.push(parseInt(a[i]));
		if (isNaN(aNum[i])) {
			validInput = false;
		}
	};

	ctx.clearRect(0, 0, c.width, c.height);
	canvasY = 18;

	if (validInput) {
		insertionSort(aNum);
		for (var i = 0; i < aNum.length; i++) {
			ctx.fillText(aNum[i], (i*40) + leftMargin, 30);
		}

	} else {
		println("cmon!");
		ctx.fillText("Oops, your input was not all a number.", 18, 18);
		ctx.fillText("Give it another shot. Like this: 2 4 8 1 0 5", 18, 40);
	}
}
