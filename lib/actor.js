//VARIABLES
var actors = [
	"Tom Hanks",
	"Henry Winkler",
	"Will Smith",
	"Bill Murray"
];

exports.getActor = function(){
	var i = Math.floor(Math.random() * actors.length);
	return actors[i];
}