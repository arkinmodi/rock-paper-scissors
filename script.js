//Get inputs when submit button is clicked
document.getElementById('submit').onclick = function () {
    
    //Get user input
    var userChoice = document.getElementById('userChoice').value.toLowerCase();
    //Take computer input
    var computerChoice = Math.random();
    
    //Convert computer input
    if (computerChoice < 0.34) {
    	computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
    	computerChoice = "paper";
    } else {
    	computerChoice = "scissors";
    } 
    
    console.log("Computer: " + computerChoice);
    console.log("User: " + userChoice);
    
    //Compare the inputs
    function compare (choice1, choice2) {
        if (choice1 == choice2) {
            return ("The result is a tie!");
        } else if (choice1 == "rock") {
            if (choice2 == "scissors") {
                return ("rock wins");
            } else {
                return("paper wins");
            };
        } else if (choice1 == "paper") {
            if (choice2 == "rock") {
                return ("paper wins");
            } else {
                return ("scissors wins");
            };
        } else if (choice1 == "scissors") {
            if (choice2 == "paper") {
                return("scissors wins");
            } else {
                return("rock wins");
            };
        };
    };
    
    document.getElementById("computerChoice").innerHTML = "Computer: " + computerChoice;
    document.getElementById("result").innerHTML = compare(userChoice, computerChoice);
};