// Get Canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "black";
ctx.font = "18px monospace";

var canvasY = 18;
var leftMargin = 50;

// Functions
var drawLine = function(pt1X, pt1Y, pt2X, pt2Y) {
	// console.log(pt1X, pt1Y);
	// console.log(pt2X, pt2Y);

	ctx.beginPath();
	ctx.moveTo(pt1X, pt1Y);
	ctx.lineTo(pt2X, pt2Y);
	ctx.stroke();
};

var displayArray = function(array, swtchIdx, initialIdx) {
	for (var i = 0; i < array.length; i++) {
		ctx.fillText(array[i], (i * 50) + leftMargin, canvasY);
		if (swtchIdx === i) {
			drawLine((i*50 + leftMargin) + 4, canvasY - 50, (initialIdx*50 + leftMargin) + 4, canvasY - 16);
		}
	};
	
	canvasY += 50;
};

var swap = function(array, idx1, idx2) {
    var tmp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = tmp;
};

var idxOfMin = function(array, stIdx) {
    var minVal = array[stIdx];
    var minIdx = stIdx;
    
    for (var i = stIdx; i < array.length; i++) {
        if (array[i + 1] < minVal) {
            minIdx = i + 1;
            minVal = array[minIdx];
        }
    }
    
    return minIdx;
    
};


var selectionSort = function(array) {
	displayArray(array);
    var tst;
    for (var i = 0; i < array.length; i++) {
        tst = idxOfMin(array, i);
        if (tst > i) {
            swap(array, tst, i);
            displayArray(array, tst, i);
        }
    }
    
    return array;
};

var a = [6, 5, 4, 3, 2, 1];
selectionSort(a);
var aNum = [];

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
		selectionSort(aNum);
	} else {
		ctx.fillText("Oops, your input was not all a number.", 50, 100);
		ctx.fillText("Give it another shot. Like this: 2 4 8 1 0 5", 50, 118);
	}
}











