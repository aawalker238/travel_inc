//VARIABLES
var actors = [
	"Tom Hanks",
	"Henry Winkler",
	"Will Smith",
	"Bill Murray"
];

//REQUIRE
var express = require("express");
// var handlebars = require("express-handlebars");
var handlebars = require("express-handlebars")
	.create({defaultLayout:"main"});

//APP
var app = express();



//HANDLEBARS TEMPLATING ENGINE

// var handlebars = require("express-handlebars")
// 	.create({defaultLayout:"main"});

// app.engine('handlebars', handlebars({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

//PORT CONFIG
app.set("port", process.env.PORT || 3000);

//ROUTES
app.get("/", function(req,res){
	var randomActor = actors[Math.floor(Math.random() * actors.length)];
	res.render("home", {actor:randomActor});
});

app.get("/about", function(req,res){
	res.render("about");
});


//custom 404
app.use(function(req,res,next){
	res.status(404);
	res.render("404");
});

//custom 500
app.use(function(err,req,res,next){
	console.error(err.stack);
	res.status(500);
	res.render("500");
});



//SERVER
app.listen(app.get("port"), function(){
	console.log("Server listening on PORT " + app.get("port") + ". Press Ctrl+C to terminate.");
});










