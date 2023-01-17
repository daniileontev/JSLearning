"use strict";

// простой пример 

let number = 5; debugger

function logNumber() {
    let number = 4; debugger
    console.log(number);
}

number = 6;

logNumber(); debugger


// пример замыкания
function createCounter(){
    let counter = 0;

    const myFynction = function(){
        // counter = counter + 1;
        return counter += 1;
    };

    return myFynction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2 , c3);


