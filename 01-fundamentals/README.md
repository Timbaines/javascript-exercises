# 01 JavaScript Fundamentals

## Table of Contents
[Variables](#variables--data-types) 

[Operators](#operators)

## Variables & Data Types

### Variables

**Variables** are values in your code that can represent different values each time the code runs.

**Declaring Variables:** The first time you create a variable, you must declare it. The second time you create a variable, you only use the name of the variable to assign it to a new value.

**let, var, and const:** The let, var, and const keywords are used to declare variables. let and var are related to the scope of the variable. var has global scope and let has block scope.


> [!NOTE]
>  
> **global scope:** The global scope means that you can access the variables defined with var in the entire script.
> 
> **block scope:** The block scope means that you can only use variables defined with let in the specific block of code in which it is defined.
> 
> **const:** is used to declare a constant that only get a value assigned once.  (ex. line 25 in variables.js).

## Operators

**Operators:** come into play when you want to work with variables, modify them, perform calculations and compare them.

### Arithmetic Operators

This type of operator is used to perform mathematical operations with numbers. These operations include basic mathematics that you are familiar with, such as addition, subtraction, multiplication, and division.

1. **Addition:** use the `(+)` operator to add two numbers together.
2. **Subtraction:** use the `(-)` operator to subtract one number from another.
3. **Multiplication:** use the `(*)` operator to multiply two numbers together.
4. **Division:** divide two numbers by using the `(/)` operator.
5. **Exponentiation:** raising a certain base number to the power of the exponent using the `**` operator.
6. **Modulus:** this operation determines how much is left after dividing one number by another number using the `(%)` operator..
7. **Unary operators:** these are increment and decrement operators.
   - **Operands** are subject to the operator. For example, the `(x++)` (we can read as x = x + 1) operator increments the value of the operand by 1 and the `(x--)` (we can read as x = x - 1) operator decrements the value of the operand by 1. 

### Combining Operators

| Name                              | Symbol  | Example             |
|-----------------------------------|---------|---------------------|
| Grouping                          | ( ... ) | (x + y)             |
| Exponentiation                    | **      | x ** y              |
| Prefix increment and decrement    | ++, --  | ++x, --y            |
| Multiplication, division, modulus | *,/,%   | x * y, x / y, x % y |
| Addition and subtraction          | +, -    | x + y, x - y        |

### Comparison Operators

Comparison operators are different from arithmetic operators and the outcome is always a Boolean, true or false.

**1. Equal:**
- The equal operator `==` and `===` performs a type conversion and then compares the values. The `===` triple operator will evaluate both the value and the data type to determine if both sides are equal or not.

**2. Not Equal:**
- The not equal operator `!=` and `!==` is similar to the equal operator except it does the opposite. It returns true when the two variables are not equal, and false when they are equal.

**3. Greater Than:**
- The greater than operator `>` compares two values and returns true if the left value is greater than the right value.

**4. Less Than:**
- The smaller than operator `<` compares two values and returns true if the left value is smaller than the right value.

**5. Greater Than or Equal To**
- The greater than or equal to operator `>=` compares two values and returns true if the left value is greater than or equal to the right value.

**6. Less Than or Equal To**
- The smaller than or equal to operator `<=` compares two values and returns true if the left value is smaller than or equal to the right value.

### Logical Operators

Logical operators are used to check two conditions in one or negate a condition. You can use and, or, and not.

**1. And:**
- The and operator `&&` returns true if both conditions are true.

**2. Or:**
- The or operator `||` returns true if one of the conditions is true.

**3. Not:**
- The not operator `!` returns true if the condition is false.