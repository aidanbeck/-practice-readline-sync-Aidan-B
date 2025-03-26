const input = require('readline-sync');

let question0   = input.question("What operation do you use to compare values of the same type?: ");
let question1   = input.questionInt("What is a falsy Number?: ");
let question2   = input.question("What data type is used for true/false?: ");
let question3   = input.question("What data type is used for a list of values?: ");
let question4   = input.question("What data type is this message?: ");

console.log("");
console.log("#. Correct Answer, Given Answer");
console.log("0. ===, " + question0);
console.log("1. 0 or -0, " + question1);
console.log("1. Boolean, " + question2);
console.log("1. Array, " + question3);
console.log("1. String, " + question4);