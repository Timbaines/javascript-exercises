// Operators come into play when you want to work with variables, modify them, perform calculations and compare them.

// Arithmetic Operators

let tb1 = 20;
let tb2 = 4;

let result1 = tb1 + tb2;
console.log(result1); // Output: 24

// String Concatenation

let str1 = "What up ";
let str2 = "addition";

let result2 = str1 + str2;
console.log(result2); // Output: What up addition

// Practice with Operators and string concatenation (age, name)

let name = "Tim";
let age = 44;

let result3 = "My name is " + name + ", I am " + age + " years old and learning to code JavaScript";

console.log(result3); // Output: My name is Tim, I am 44 years old and learning to code JavaScript

// Practice with Operators and string concatenation (age, name, true/false variables)
let isStudent = true;
let result3WithBool = result3 + " = Student: " + isStudent;

console.log(result3WithBool); // Output: My name is Tim, I am 44 years old and learning to code JavaScript = Student: true

// Subtraction Operators

let tb3 = 44;
let tb4 = 23;

let result4 = tb3 - tb4;
console.log(result4); // Output: 21

let tb5 = 44;
let tb6 = 8;
let str3 = "Hello";
let tb7 = 10
let result5 = tb5 - tb6;
let result6 = str3 - tb7;

console.log(result5, result6); // Output: 36 NaN

// Multiplication Operators

let tb8 = 44;
let tb9 = 14;
let str4 = "Hello";
let tb10 = 7;
let result7 = tb8 * tb9;
let result8 = str4 * tb10;

console.log(result7, result8); // Output 616 NaN

// Division Operators

let tb11 = 44;
let tb12 = 11;
let result9 = tb11 / tb12;

console.log(result9); // Output: 4

// Exponential Operators

let sb1 = 44;
let sb2 = 3;
let result10 = sb1 ** sb2;

console.log(result10); // Output: 85184

// Modulus Operator
// example 1:
let sb3 = 11;
let sb4 = 4;
let result11 = sb3 % sb4;

console.log(`${sb3} % ${sb4} = ${result11}`); // Output: 11 % 4 = 3
// example 2:
let sb5 = 9;
let sb6 = 3;
let result12 = sb5 % sb6;

console.log(`${sb5} % ${sb6} = ${result12}`); // Output: 9 % 3 = 0
// example 3:
let sb7 = 21;
let sb8 = 6;
let result13 = sb7 % sb8;

console.log(`${sb7} % ${sb8} = ${result13}`); // Output: 21 % 6 = 3

// Unary Operators (increment and decrement)

// Increment Operator
let tw1 = 5;
tw1++;

console.log(tw1); // Output: 6

// Decrement Operator
let tw2 = 4;
tw2--;

console.log(tw2); // Output: 3

// Prefix and Postfix Operators

// Postfix Operator
let tw3 = 2;
console.log(tw3++); // Output: 2
console.log(tw3); // Output: 3

// Prefix Operator
let tw4 = 2;
console.log(++tw4); // Output: 3

// This example uses the mathematical order of operations to calculate the value of tw5 + tw6 * tw7. For multiplying
// Uses 6 (prefix, 5 is incremented before multiplication)
// 2 (postfix, 2 is incremented after the execution and will not affect the current calculation).
// This comes down to 12 and the tw5 is the postfix operator and will execute after the addition.
// It adds 12 to 4 and becomes 16.
let tw5 = 4;
let tw6 = 5;
let tw7 = 2;

console.log(tw5++ + ++tw6 * tw7++); // Output: 16


