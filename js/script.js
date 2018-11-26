// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

var userInput;
var userWinCount = 0;
var computerWinCount = 0;

$("#uWins").text(userWinCount);
$("#cWins").text(computerWinCount);

var choices = ["Rock", "Paper", "Scissors"];

$("button").click(function() {
    var preUserInput = $("#input").val();
    userInput = preUserInput.toUpperCase();
    $("#input").val("");
    $("#userChoice").text(preUserInput);
    
    var computerPick = choices[Math.floor(Math.random() * choices.length)];
    $("#computerChoice").text(computerPick);
    
    
    if (userInput != "ROCK" || userInput != "PAPER" || userInput != "SCISSORS") {
        $("#result").text("Enter a valid answer.");
    }
    
    if(userInput==="PAPER" && computerPick==="Paper"){
        $("#result").text("Draw!");
    }
    
    if(userInput==="PAPER" && computerPick==="Scissors"){
        $("#result").text("The computer wins!");
        computerWinCount++;
    }
    
    if(userInput==="PAPER" && computerPick==="Rock"){
        $("#result").text("You win!");
        userWinCount++;
    }
    
    if(userInput==="SCISSORS" && computerPick==="Scissors"){
        $("#result").text("Draw!");
    }
    
    if(userInput==="SCISSORS" && computerPick==="Rock"){
        $("#result").text("The computer wins!");
        computerWinCount++;
    }
    
    if(userInput==="SCISSORS" && computerPick==="Paper"){
        $("#result").text("You win!");
        userWinCount++;
    }
    
    if(userInput==="ROCK" && computerPick==="Rock"){
        $("#result").text("Draw!");
    }
    
    if(userInput==="ROCK" && computerPick==="Paper"){
        $("#result").text("The computer wins!");
        computerWinCount++;
    }
    
    if(userInput==="ROCK" && computerPick==="Scissors"){
        $("#result").text("You win!");
        userWinCount++;
    }
    
    $("#uWins").text(userWinCount);
    $("#cWins").text(computerWinCount);
});
