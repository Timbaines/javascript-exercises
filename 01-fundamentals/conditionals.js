// Conditional Statements are used to make decisions based on the outcome of a condition.

// if else statements
// EXAMPLE 1
let sunny = true

if (sunny) {
    console.log("It's sunny outside!");
} else {
    console.log("It's cloudy outside!");
}
// Output: It's sunny outside!

// EXAMPLE 2
let hobby = "coding";

if (hobby = "running") {
    console.log("I love running too!");
} else {
    console.log("Coding is my hobby and I enjoy it more than running");
}
// Output I love running too!


// else if statements
// EXAMPLE 1
let age = 10;
let cost = 0;
let message;

if (age < 3) {
    cost = 0;
    message = "Access is free if you are 3 and under.";
} else if (age >= 3 && age < 18) {
    cost = 5;
    message = "After the discount, the cost is 5 dollars.";
} else if (age >= 12 && age < 60) {
    cost = 12;
    message = "The cost of a regular ticker is 12 dollars";
} else  {
    cost = 15;
    message = "The cost of a regular ticker is 15 dollars";
}

console.log(message);
console.log("Your total cost "+cost);
