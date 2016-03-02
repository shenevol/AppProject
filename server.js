var vhttp = require ("http"); //vhttp just variable 
var url = require("url"); //require url module

var onRequest = function (req,res){
	console.log("request received");
	res.end("hello");
	

}

vhttp.createServer(onRequest).listen(3000); //create server
//when people visit this web server or the request iscoming,
//onRequest function is called

console.log("Server starts to listen at port 3000");