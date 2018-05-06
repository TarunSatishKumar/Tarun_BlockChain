/*var http=require('http');
http.createServer(function (req,res){
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.end('Hello My First Node Server App');
}).listen(1337,'127.0.0.1');
console.log('Server running at http://localhost:1337/')*/

var express=require('express');
var app=express();

app.use(express.static(__dirname + "/public"));
app.get('/studentDetails',function(req,res){
		var studentDetails=[{name:'Tarun',rollno:22},{name:'Kumar',rollno:31},
								{name:'Satish',rollno:21}];
		console.log("Received request from controller");
		res.json(studentDetails);
});

app.listen(8008);
console.log("server running at port 8008");