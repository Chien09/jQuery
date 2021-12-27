//Creating a backend server side calculator web application, instead of client side

//Include NPM --> npm init 

//Install EXPRESS --> npm install express

//install body-parser --> npm install body-parser

//run the server with --> nodemon calculator.js

//when server up and running on web browser type --> "localhost:3000"

//Get the data sent from the client side "POST", need to install parser --> npm install body-parser 

const express = require("express");
const app = express(); 

//allowing to get the data sent from client side through <form></form>
const bodyParser = require("body-parser"); 

//body-parser can be used with express
//urlencoded is to grab information or data from <form></form> 
//extended: true allows to POST nested objects
app.use(bodyParser.urlencoded({extended: true})); 

//create server listening at port 3000 
app.listen(3000, function(){
    console.log("Server up and running... Listening at port 3000");
});

//get and send response to client when client access home page 
app.get("/", function(request, response){
    
    //sending the index.html to client to render on their web browser
    //using "__dirname" because when we deploy this web application to cloud the directories may be different
    response.sendFile(__dirname + "/index.html"); 
});

//retrieve "post" data request "<form></form>" from client side 
//in order to get the data sent from the client side, need to install parser --> npm install body-parser 
app.post("/", function(request, response){
    //you can see the data POST from client
    //console.log(request.body); 
    //console.log(request.body.num1); 

    var num1 = Number(request.body.num1); //need to cast String to Number 
    var num2 = Number(request.body.num2);

    var result = num1 + num2; 

    response.send(`Result of Calculation is ${result}`);
});


//----------BMI Calculator----------
//type on web browser --> "localhost:3000/bmicalculator"

//get and send reponse to client when access /bmiCalculator 
app.get("/bmicalculator", function(request, response){
    response.sendFile(__dirname + "/bmiCalculator.html"); 
});

//retrieve "post" data request "<form></form>" from client side 
app.post("/bmicalculator", function(request, response){
    var weight = parseFloat(request.body.weight);
    var height = parseFloat(request.body.height); 

    var result = weight / Math.pow(height, 2);

    response.send(`Result of your BMI is ${result}`);
}); 