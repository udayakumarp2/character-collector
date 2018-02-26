// Global Variables
// Character Variables
var characters = {
    mario:
    {
        name:"mario",
        value: 0
    },
    luigi:
    {
        name:"luigi",
        value: 0
    },
    peach:
    {
        name:"peach",
        value: 0
    },
    daisy:
    {
        name:"daisy",
        value: 0
    }

};

// Current Scores and Target
var targetScore = 0;
var currentScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount= 0;


//  Functions
// Helper function for getting random numbers
var getRandom = function(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
// Starts the game and restarts the game
var startGame = function() {
// Reset Current Game Score
 currentScore = 0;
// Set a new Target Score (between 19 and 120)
targetScore = getRandom(19,120);
// Set different values for each of the characters (between 1 and 12)
characters.mario.value = getRandom (1,12);
characters.luigi.value = getRandom (1,12);
characters.peach.value = getRandom (1,12);
characters.daisy.value = getRandom (1,12);
// Change the HTML to reflect all of these changes 
$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore);

// Testing
console.log("target score"+targetScore) 
console.log("Mario"+characters.mario.value+"|Luigi"+characters.luigi.value+"|Peach"+characters.peach.value+"|Daisy"+characters.daisy.value)
}

// Respond to clicks on the characters
var addValues = function(characters) {
//  Change currentScore
    currentScore = currentScore + characters.value;
//  Change the HTML to reflect changes in CurrentScore
$("#yourScore").html(currentScore);

// Call the checkWin function
checkWin();


// Testing Console
console.log("Your Score:"+currentScore);
}

// Check if user Won or lost and Reset the Game
var checkWin =function() {
    // Check if currentScore is larger than targetScore
    if(currentScore>targetScore) {
        alert("Sorry. You lost!");
        console.log("You lost");

        // Add to loss counter
        lossCount++;
        // Change the loss count HTML
        $("#lossCount").html(lossCount);
         // restart game
         startGame();
    }
    else if(currentScore == targetScore){
        alert("Congratulations! You Won!");
        console.log("You Won!");
    // Add to Win Counter
        winCount++;
    // Change the win count HTML
        $("#winCount").html(winCount);
    // restart game
        startGame();
    }

    
}
        

// Main Process
// Starts the game the first time
startGame();

$("#mario").click(function() {
    addValues(characters.mario);

});

$("#luigi").click(function() {
    addValues(characters.luigi);
});

$("#peach").click(function() {
    addValues(characters.peach);
});

$("#daisy").click(function() {
    addValues(characters.daisy);
});