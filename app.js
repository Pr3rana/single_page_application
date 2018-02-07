 
var express = require('express');
var bodyParser = require('body-parser');
var app = require('express')();
var http = require('http').Server(app);
var request = require('request');

//app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Provide the absolute path to the dist directory.
app.use(express.static('D:/xampp/htdocs/Assignment/dist'));

//get request for 'index.html' page.
app.get('/', function(req, res) {
   res.sendfile('index.html');
});
//post method, to receive the request from the client and sending back the response
app.post('/app', function(req, res) {
    //getting the input
    var input = req.body.data;
    //reversing the input string
    var str = input.split('').reverse().join().replace(/\,/g,"");
    //checking whether the actual input and the reverse string both are same or not.
    if(input == str){
        res.end(input + " is a palindrome.");
    }
    else{
        res.end(input + " is not a palindrome.");
    }
    
});
//listening on port 3000
http.listen(3000, function() {
   console.log('listening on *:3000');
});
