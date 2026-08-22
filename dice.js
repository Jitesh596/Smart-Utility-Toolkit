const crypto = require("crypto");

function rollDice() {
    const randomNumber = crypto.randomInt(1, 7);
    return randomNumber;
}

console.log("Dice Roll 1:", rollDice());
console.log("Dice Roll 2:", rollDice());
console.log("Dice Roll 3:", rollDice());
console.log("Dice Roll 4:", rollDice());
console.log("Dice Roll 5:", rollDice());