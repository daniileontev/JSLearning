"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Текст из аргумента text");
console.log(num);


function calc(a,b){
    return (a+b);
}

console.log(calc(4,5));
console.log(calc(3,4));
console.log(calc(1,5));
console.log(calc(4,66));

function ret(){
    let num = 50;

    // тут может быть прописано большое кол-во выполенения действий
    
    return num; 
}

const anotherNum = ret();
console.log(anotherNum);

// functionExpression

const logger = function(){
    console.log("Hello!");
};

logger();

// arrowFunction(es6)

const clc = (a,b) => a + b;

// либо

const clc2 = (a,b) => {return a +b};

//простой пример большой стрелочной функции

const clc3 = (a, b) =>{
    console.log('1');
    return a + b;
};