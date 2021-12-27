//Creating NPM Express Server !!!!!

//Include NPM command --> npm init 
//So whenever you create your web development project follow steps to include npm & express in your project

//Install Express, it is a framework for node.js https://expressjs.com
// command --> npm install express (this will also update in your "package.json")

//Install Nodemon, so it will automatically restart the server when code changes are detected https://nodemon.io
//so you do not need to keep typing command --> node server.js to run the server over and over again
//command --> npm install -g nodemon      IF cannot install due to permission access --> sudo npm install -g nodemon
//THEN run command --> nodemon server.js    INSTEAD of --> node server.js 

//Using Express
const express = require("express");
const app = express();

//server listen at port 3000, you can use a "callBack" function to see the server is up
//in Web browser type "localhost:3000" to access the server 
//"crl-C" to exit the server running in ternimal when testing 
app.listen(3000, function(){
    console.log("Server up and running... Listening at port 3000");
});

//when clients or web browsers does a GET REQUEST to homepage tells server to do something with a RESPONSE back to client
//"/" means home root or home page 
app.get("/", function(request, response) { 

    //see the content of the request from the client/web browser 
    //console.log(request); 

    //server to send response to GET request from client
    response.send("<h1>Hello from Server!</h1>"); 
});

//setting the response when client or web browser accesses contact page
//type "localhost:3000/contact" in web browser 
app.get("/contact", function(request,response){ 
    response.send("<h1>Contact Me by email at blah blah blah</h1>");
});

//setting response when client or web browser accesses about page 
app.get("/about", function(request, response){
    response.send("<h1>Hi, my name is Krittidet Liu. I am a software engineer!</h1>");
});
