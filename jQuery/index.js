//-----Learning jQuery 


//it is similar to DOM/JavaScript query --> document.querySelector("h1").style.color = "red"; 
//$() is also .querySelectorAll() 
$("h1").css("color", "red");  //OR jQuery("h1").css("color", "red"); 

//this will return the color 
console.log( $("h1").css("color") ); 

//add class
//this a better way to change CSS style, since we want to separate HTML, CSS, and Javascript code
$("h1").addClass("big-title margin-50"); 

//remove class
$("h1").removeClass("big-title"); 

//check class
$("h1").hasClass("big-title");

//change text
$("button").text("Bye");

//add html
$("h1").html("<em>POOOOOOOOOOOOO</em>");

//get attribute
$("img").attr("src"); 

//set attribute
$("a").attr("href", "https://www.google.com");

//add event listeners to all buttons, in normal convention JavaScript you would need a loop to add eventListener to each indivudal button element
$("button").click(function(){
    $("h1").css("color", "green");
});

//logging keydown events 
$("input").keypress(function(event){
    console.log(event.key);
});

//adding event listener to whole doc
$(document).keypress(function(event){
    console.log(event.key);
});

//another way to add event listener
$("h1").on("mouseover", function(){
    $("h1").css("color", "grey");
});

//adding html code before a element tag 
$("h1").before("<button>New Button</button>");
$("h1").after("<button>New Button</button>");
//.prepend() will add it between and after the opening tag <h1>
//.append() will add it between and before the closing tag of </h1>

//removing elements 
//$("button").remove(); 

//animations 
$("button").on("click", function(){
    $("h1").hide(); //will hide the h1 .show() to unhide it , can use .toggle() as well
    //can use .fadeOut() .fadeIn() .fadeToggle() .slideUp() .slideDown() .slideToggle(); 
    //YOU CAN USE THESE to make your Navigation Bar appear or disappear!!!!!!!!!!!!
});

$("button").on("click", function(){
    $("h1").animate({opacity: 0.5}); //must only use numeric/number value attribute, cannot change color
});

//chaining animations
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
