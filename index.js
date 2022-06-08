// Add answers here
// #### 1. Los or New?
// Create a function named "_nameOfCity_". If a passed string begins with "_Los_" or "_New_",
// then return the full string. If not, return "_The city name does not begin with Los or New_".
// The function should be **case insensitive**.

// ##### Examples
// ````javascript
// nameOfCity('New York') ➞ 'New York'
// nameOfCity('newark') ➞ 'newark'
// nameOfCity('London') ➞ 'The city name does not begin with Los or New'
// ````

function nameOfCity(str) {
    // using slice method to get the first 3 letters from the string
    let first3Letters = str.slice(0, 3);
    // to make the first 3 letters to be case insensitive
    first3Letters = first3Letters.toLowerCase();
    //console.log(first3Letters);
    // to check if the first3Letters matches the string "los" or "new"
    // if so return the string otherwise return a message "not found"
    if (first3Letters === "new" || first3Letters === "los") {
        return str;
    } else {
        return `The city name ${str} does not begin with Los or New`;
    }
}
console.log(nameOfCity("New York"));//New York
console.log(nameOfCity("newark"));//newark
console.log(nameOfCity("London"));//The city name London does not begin with Los or New
console.log(nameOfCity("Los Angels"));//Los Angels


// #### 2. isDivisible?
// Create a function named "_isDivisible_". The function should take an integer as an argument. 
//If the integer is divisible by 100, then return true. If not, return false.

// ##### Examples
// ````javascript
// isDivisible(1) ➞ false
// isDivisible(1000) ➞ true
// isDivisible(100) ➞ true
// ````
function isDivisible(int) {
    // to check if the integer is divisible by 100 using modulus
    // if the remainder is zero then return true i.e. is divisible by 100
    // otherwise return false.
    if (int % 100 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isDivisible(1)); //false
console.log(isDivisible(1000));//true
console.log(isDivisible(100));//true


// #### 4. What's the weather?
// Use a **ternary operator** to complete this task. Create a function named "_isRaining_". 
//If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_".

// ##### Example
// ````javascript
// isRaining(true) ➞ 'wet day - you need an umbrella'
// ````

//used arrow function and ternary operator to make a single line code.
const isRaining = bool => bool ? "wet day - you need an umbrella" : "dry day - leave your umbrella at home";
console.log(isRaining(true));//wet day - you need an umbrella
console.log(isRaining(false));//dry day - leave your umbrella at home

// ### Loops 

// #### 1. Sequence
// Create a function named "_geometricalSequence_" and **use a loop** 
//to return the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.

// ##### Example
// ````javascript
// geometricalSequence() ➞ '1 2 4 8 16 32 64 128 256'
// ````

function geometricalSequence() {
    let result = 1;
    let str = "";
    while (result <= 256) {
        str += " " + result.toString();
        result = result * 2;
    }
    return str;
}
console.log(geometricalSequence());//1 2 4 8 16 32 64 128 256


// #### 2. Multiples
// Create a function named "_multiplesOfThree_" and **use a loop** to 
//return the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.

// ##### Example
// ````javascript
// multiplesOfThree() ➞ '3 6 9 12 15'
// ````
function multiplesOfThree() {
    let str = "";
    for (let i = 1; i <= 5; i++) {
        let k = i * 3;
        str += " " + k.toString();
    }
    return str;
}
console.log(multiplesOfThree());//3 6 9 12 15
// ### Math 

// #### 1. You've got the power
// Create a function named "_powerOf_" which takes an integer as an argument and 
//returns the integer to the power of itself. You should **use a Math object method** to make the calculation.

// ##### Examples
// ````javascript
// powerOf(3) ➞ 27
// powerOf(4) ➞ 256
// ````
//used arrow function and Math object to get the power of a integer in a single line code
const powerOf = (num) => Math.pow(num, num);
console.log(powerOf(3));//27
console.log(powerOf(4));//256
console.log(powerOf(10));//10000000000

// ### Problem Solving 

// #### 1. How many? 
// Create a function named "_vowelCount_" that accepts a string as an argument. 
//Check how many vowels (A, a, E, e, I, i, O, o, U, u) the string contains, if any. **Return the vowel count** of the string. 

// ##### Examples
// ````javascript
// vowelCount("hello") ➞ 2
// vowelCount("test") ➞ 1
// vowelCount("fbw") ➞ 0
// ````
// program to count the number of vowels in a string

// defining vowels

// function to count the vowels in a word.
function vowelCount(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    // using for..of loop to loop through the word and check if the letter exists in the vowels array
    // if so increase the count and return the count.
    for (let letter of word.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}
console.log(vowelCount("hello")); //2
console.log(vowelCount("test"));//1
console.log(vowelCount("fbw"));//0
console.log(vowelCount("development"));//4









// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
