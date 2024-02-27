"use strict";
/**
 * problem statement --
 * delecaring variables in js ( ) & ts
 */
const x = 10;
// fn for greeting
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Vasant");
// fn for calc sum
function sum(x, y) {
    return x + y;
}
sum(2, 5);
//  return true/false based upon 18+
/**
 * :boolean - is type inference typescript identify what you are tring to return
 * giving it yourself good practice
 */
function checkAdult(age) {
    if (age > 18) {
        return true;
    }
    return false;
}
console.log(checkAdult(21));
/**
 * problem statement --
 * create a function that takes another fn (callback) and run after 1 sec
 */
function greetings(name) {
    console.log(`Hello ${name}`);
}
function greetAfterDelay(greetings) {
    setTimeout(() => {
        greetings("Vasu");
    }, 5000);
}
greetAfterDelay(greet);
