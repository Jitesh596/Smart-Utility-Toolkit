const isEven = require("./modules/isEven");

const number = 10;

if (isEven(number)) {
    console.log(number, "is an even number.");
} else {
    console.log(number, "is an odd number.");
}