//---------------Node envionrment-----------------------------------------------------------------------------------
//To use Node shell environment in Ternimal just type command --> node (and code away)

//to include "File System Module" to be able to access your system files in computer and do other things such as READ and WRITE
const fs = require("fs"); 

//EXAMPLE to copy contents of file1 to a new file, check Node.js documnetation for other codes methods
fs.copyFileSync("file1.txt", "copyfile1.txt");



//------------------Install NPM packages---------------------------------------------------------------------------
/*
NPM --> comes with node.js you can include it in your project to see and organize the packages/extensions/dependencies 
data you have included in this project in JSON file.

To include NPM go to ternimal and type the commad --> npm intit (go through the steps to fill in information)
this will create a "package.json" file. 

-entry point: --> means your main JavaScript file 

package.json file will contain similar to this:
{
  "name": "node",
  "version": "1.0.0",
  "description": "Learn node Project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Krittidet Liu",
  "license": "ISC"
}

*** Now you can download and use other's NPM packages modules from https://www.npmjs.com for use in your code ***

EXAMPLE: we search "superhero names" in the website and click on the first one 
It will tell you how to install the "superheroes" package module

type command -->npm install superheroes (has to be in the same directory!!!!!!!!!! once installed your "package.json" will include it as "dependices")
*/

//Usage: 
const superheroes = require('superheroes');
var name = superheroes.random(); //will generate random superhero name
console.log(name); 

var names = superheroes.all; //will generate a lot of names 
console.log(names); 

//You can even create charts from other npm downdload packages https://www.npmjs.com/package/chart.js
