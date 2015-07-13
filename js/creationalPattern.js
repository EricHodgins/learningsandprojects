console.log("cool beans");

var Person = function(name) {
	this.name = name;
};

Person.prototype.doStuff = function() {
	console.log(this.name + " is doing this is stuff");
};

var eric = new Person("Eric");

