var numCount = 0;
var clickCount = 0;
var winCount = 0;
var lossCount = 0;

// Get a random number for user to guess
var targetNumber = Math.floor(Math.random() * 102) + 19;
console.log(`Answer: ${targetNumber}`);
$("#magicNumber").html(`And the magic number is......<b>${targetNumber}</b>!`);

// Assign random values to the crystals, all between 1 and 12
var greenNumber = Math.floor(Math.random() * 12) + 1;
console.log(`Green: ${greenNumber}`);

var blueNumber = Math.floor(Math.random() * 12) + 1;
// This is so that there are no duplicates
while (blueNumber == greenNumber) {blueNumber = Math.floor(Math.random() * 12) + 1;}
console.log(`Blue: ${blueNumber}`);

var redNumber = Math.floor(Math.random() * 12) + 1;
while (redNumber == blueNumber || redNumber == greenNumber) {redNumber = Math.floor(Math.random() * 12) + 1;}
console.log(`Red: ${redNumber}`);

var purpleNumber = Math.floor(Math.random() * 12) + 1;
while (purpleNumber == redNumber || purpleNumber == blueNumber || purpleNumber == greenNumber) {purpleNumber = Math.floor(Math.random() * 12) + 1;}
console.log(`Purple: ${purpleNumber}`);

$("#green").click(function() {
    clickCount++;
    numCount += greenNumber;
    $("#score").text(`Score: ${numCount}`);
    $("#clicks").text(`Clicks: ${clickCount}`);    
    console.log(`Count: ${numCount}`);
    checkWin();
})

$("#blue").click(function() {
    clickCount++;
    numCount += blueNumber;
    $("#score").text(`Score: ${numCount}`);
    $("#clicks").text(`Clicks: ${clickCount}`);  
    console.log(`Count: ${numCount}`);
    checkWin();
})

$("#red").click(function() {
    clickCount++;
    numCount += redNumber;
    $("#score").text(`Score: ${numCount}`);
    $("#clicks").text(`Clicks: ${clickCount}`);  
    console.log(`Count: ${numCount}`);
    checkWin();
})

$("#purple").click(function() {
    clickCount++;
    numCount += purpleNumber;
    $("#score").text(`Score: ${numCount}`);
    $("#clicks").text(`Clicks: ${clickCount}`);  
    console.log(`Count: ${numCount}`);
    checkWin();
})

function checkWin() {
    if (numCount == targetNumber) {
        winCount++;
        $("#wins").text(`Wins: ${winCount}`)
        alert(`You won in ${clickCount} clicks! :D`);
        resetGame();
    } else if (numCount > targetNumber) {
        lossCount++;
        $("#losses").text(`Losses: ${lossCount}`)
        alert("You lose! :(");
        resetGame();
    }
}

function resetGame() {

    numCount = 0;
    clickCount = 0;
    $("#score").text(`Score: ${numCount}`);
    $("#clicks").text(`Clicks: ${clickCount}`); 
    console.clear();

    targetNumber = Math.floor(Math.random() * 102) + 19;
    console.log(`Answer: ${targetNumber}`);
    $("#magicNumber").html(`And the magic number is......<b>${targetNumber}</b>!`);

    greenNumber = Math.floor(Math.random() * 12) + 1;
    console.log(`Green: ${greenNumber}`);

    blueNumber = Math.floor(Math.random() * 12) + 1;
    while (blueNumber == greenNumber) {blueNumber = Math.floor(Math.random() * 12) + 1;}
    console.log(`Blue: ${blueNumber}`);

    redNumber = Math.floor(Math.random() * 12) + 1;
    while (redNumber == blueNumber || redNumber == greenNumber) {redNumber = Math.floor(Math.random() * 12) + 1;}
    console.log(`Red: ${redNumber}`);

    purpleNumber = Math.floor(Math.random() * 12) + 1;
    while (purpleNumber == redNumber || purpleNumber == blueNumber || purpleNumber == greenNumber) {purpleNumber = Math.floor(Math.random() * 12) + 1;}
    console.log(`Purple: ${purpleNumber}`);

}