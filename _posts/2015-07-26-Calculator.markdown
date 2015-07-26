---
tag: Javascript
javascript: calculator.js
codesnippet: true
---

Here it is:

<link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300' rel='stylesheet' type='text/css'>

<style type="text/css">
	/* prevent text highlighting on double click*/
	#calc-wrapper {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	#calc-wrapper {
		border: 5px solid rgb(147, 147, 147);
		box-shadow: -11px 11px 15px #888;
		width: 261px;
		height: 431px;
		margin-left: 20px;
		cursor: pointer;
	}

	#screen-wrapper {
		width: 100%;
		background-color: black;	
		margin-right: 10px;
	}

	#calc-screen {
		margin-right: 20px;
		height: 105px;
		text-align: right;
		line-height: 110px;
		font-size: 45px;
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
		color: #FFF;
	}


	/* for the numpad */
	.num {
		margin: -1px;
		border: 1px solid rgba(0, 0, 0, 0.39);
		float: left;
		width: 65px;
		height: 65px;
		text-align: center;
		line-height: 65px;
		font-size: 30px;
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
		color: #000;
		background-color: #F5F5F5;
	}

	.num:active {
		background-color: #D8D1D1;
	}

	.zero {
		width: 130px;
		text-align: left;
		text-indent: 25px;
	}

	.op {
		background-color: orange;
		color: #FFF;
	}

	.op:active {
		background-color: #FFCE33;
	}	

	/* Top 3 operators C, +/- and % */
	.topOp {
		background-color: #E4E4E4;
	}

	#decimal {
		font-size: 50px;
		line-height: 50px;
}
</style>

<div id="calc-wrapper">
	<div id="screen-wrapper"><div id="calc-screen">0</div></div>
	<div id ="clearAll" class="num extra topOp">C</div><div id="plusMinus" class="num extra topOp number" value="-">+/-</div><div id="mod" class="num extra topOp">%</div><div id="divide" class="num op">/</div>
	<div id="seven" class="num number" value="7">7</div><div id="eight" class="num number" value="8">8</div><div id="nine" class="num number" value="9">9</div><div id="multiply" class="num op">X</div>
	<div id="four" class="num number" value="4">4</div><div id="five" class="num number" value="5">5</div><div id="six" class="num number" value="6">6</div><div id="minus" class="num op">-</div>
	<div id="one" class="num number" value="1">1</div><div id="two" class="num number" value="2">2</div><div id="three" class="num number" value="3">3</div><div id="plus" class="num op">+</div>
	<div id="zero" class="num zero number" value="0">0</div><div id="decimal" class="num number" value=".">.</div><div id="equals" class="num op">=</div>
</div>