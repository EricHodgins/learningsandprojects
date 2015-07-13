---
tag: javascript
javascript: MusicQuiz/musicQuiz.js
codesnippet: true
---
<style type="text/css">
	#replay-wrapper {
		float: right;
		margin-right: 20%;
	}

	#replayHeader {
		display: none;
	}

	#replayButton {
		display: none;
		margin-bottom: 10px;
		background: rgb(66, 66, 66);
		color: #FFF;
		border: 1px solid #000;
		text-shadow: 10px 10px 10px #000;
		font-size: 20px;
	}
</style>

Here's a quick little project of a music quiz made with JavaScript.  Here's the quiz, give it a shot:

<h3>Relative Pitch Quiz</h3>

<div id="replay-wrapper">
	<h4 id="replayHeader">Way to go!</h4>
	<button id="replayButton">Replay</button>
</div>

<audio controls id="audioFiles">
	<source src="" type="audio/mp3">
</audio>
<input type="button" class="guess" value="Major Third">
<input type="button" class="guess" value="Minor Third">
<input type="button" class="guess" value="Perfect Fourth">
<input type="button" class="guess" value="Perfect Fifth">

<p>Score:<span id="score"></span></p>

<hr>

And here's the code I used to make it:

<pre class="prettyprint">
	// quiz.js
function Quiz(questions) {
	this.score = 0;
	this.questions = questions;
	this.currentQuestionIndex = 0;
}

Quiz.prototype.guess = function(answer) {
	var notification = document.getElementById("replayHeader");
	notification.style.display = "inline-block";

	if (this.getCurrentQuestion().isCorrectAnswer(answer)) {	
		notification.innerHTML = "Correct!"
		notification.style.color = "green";
		this.score++;
	} else {
		notification.innerHTML = "Maybe next time.";	
		notification.style.color = "red";
	}

	

	this.currentQuestionIndex++;
}

Quiz.prototype.getCurrentQuestion = function() {
	return this.questions[this.currentQuestionIndex];
}

Quiz.prototype.gameEnded = function() {
	return this.questions.length <= this.currentQuestionIndex;
}

////////////////////////////

// question.js
	
function Question(track, answer) {
	this.track = track;
	this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
	return this.answer === choice;
}


/////////////////////////////////



// quiz_ui.js

var Quiz_UI = {
	displayNext: function() {
		if (quiz.gameEnded()) {
			this.displayScore();
			this.playAgain();
		} else {
			this.displayQuestion();
			this.displayScore();
			this.guessHandler();
		}
	},

	guessHandler: function() {
		var buttons = document.getElementsByClassName("guess");
		for (var i = 0; i < buttons.length; i++) {
				function bindButtons(idx) {
					buttons[idx].onclick = function() {
					quiz.guess(buttons[idx].value);
					Quiz_UI.displayNext();
				}

			}
			
			bindButtons(i);
		}
	},

	displayScore: function() {
		var score_ui = document.getElementById("score");
		score_ui.innerHTML = quiz.score;
	},

	displayQuestion: function() {
		var new_track = document.getElementById("audioFiles");
		new_track.src = "/js/MusicQuiz/" + questions[quiz.currentQuestionIndex].track;
	},

	playAgain: function() {
		// Grab what "this" is now to reference in the replay.onclick function.
		var newGame = this;

		// Play ending game track (sweet outro riff)
		var endingGame = document.getElementById("audioFiles");
		endingGame.src = "/js/MusicQuiz/endingQuizMusic.ogg";
		endingGame.play();

		var replay = document.getElementById("replayButton");
		replay.style.display = "inline-block";

		var notification = document.getElementById("replayHeader");
		notification.style.display = "inline-block";

		replay.onclick = function() {
			quiz.currentQuestionIndex = 0;
			quiz.score = 0;
			newGame.displayNext();
			replay.style.display = "none";
			notification.style.display = "none";
		}
	}

}


/////////////////////////////////




// app.js

var questions = [
	new Question("minorThird.ogg", "Minor Third"),
	new Question("perfectFifth.ogg", "Perfect Fifth")
];

var quiz = new Quiz(questions);

Quiz_UI.displayNext();


/////////////////////////////////
</pre>