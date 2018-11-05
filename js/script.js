// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

var userInput;

var choices = ["rock", "paper", "scissors"];

$("button").click(function() {
    userInput = $("#input").val();
    $("#input").val("");
    $("#userChoice").text(userInput);
    
    var computerPick = choices[Math.floor(Math.random() * choices.length)];
    $("#computerChoice").text(computerPick);
    
    if(userInput==="paper" && computerPick==="paper"){
        $("#result").text("Draw!");
    }
    
    if(userInput==="paper" && computerPick==="scissors"){
        $("#result").text("The computer wins!");
    }
    
    if(userInput==="paper" && computerPick==="rock"){
        $("#result").text("You win!");
    }
    
    if(userInput==="scissors" && computerPick==="scissors"){
        $("#result").text("Draw!");
    }
    
    if(userInput==="scissors" && computerPick==="rock"){
        $("#result").text("The computer wins!");
    }
    
    if(userInput==="scissors" && computerPick==="paper"){
        $("#result").text("You win!");
    }
    
    if(userInput==="rock" && computerPick==="rock"){
        $("#result").text("Draw!");
    }
    
    if(userInput==="rock" && computerPick==="paper"){
        $("#result").text("The computer wins!");
    }
    
    if(userInput==="rock" && computerPick==="scissors"){
        $("#result").text("You win!");
    }
});