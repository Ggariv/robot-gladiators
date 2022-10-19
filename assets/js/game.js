// var playerName
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// var Enemies
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function statements
var fight = function(enemyName) {
    
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    
    // Ask players if they'd like to fight or run
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle?")

    // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

        // Remove enemy's health by subtracting the amount set in the "playerAttack" variable from the value of "enemyHealth"
        enemyHealth = enemyHealth - playerAttack ;

        // Log a resulting message to the console so we know that it worked.
        console.log (playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.") ;

        // check enemy's health
        if (enemyHealth <= 0) {window.alert (enemyName + " has died!");}
        else {window.alert (enemyName + " still has " + enemyHealth + " health left.")} ; 

        // Remove player's health by subtracting the amount set in the "enemyAttack" variable from the value of "playerHealth"
        playerHealth = playerHealth - enemyAttack ; 

        // Log a resulting message to the console so we know that it worked.
        console.log (enemyName + " atacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.") ;

        // check player's health
        if (playerHealth <= 0) {window.alert (playerName + " has died!");}
        else {window.alert (playerName + " still has " + playerHealth + " health left.")} ;
    
        } 
    
    // if player chooses to skip
    else if (promptFight === "skip" || promptFight === "SKIP") { 
        
        // confirm player wants to skip 
        var confirmSkip = window.confirm ("Are you sure you'd like to quit?") ;

        // if yes (true), leave fight                                                           // result -> subtract money from playerMoney for skipping
        if (confirmSkip) {window.alert(playerName + " has decided to skip this fight. Goodbye!") ; playerMoney = playerMoney -2; }
    
        // if no (false), ask question again by running fight() again  
        else {fight(); }        

        }
    
    // if player writes anything else
    else {window.alert ("You need to choose a valid option. Try again!");}
        
    };

for (var i=0; i< enemyNames.length; i=i+1) {fight(enemyNames[i]);}

fight();
