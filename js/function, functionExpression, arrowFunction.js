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

// пример работы аргументов функций
const usdCurr = 28;
const eurCurr = 42;

function convert (amount, curr){
    console.log(curr * amount);
}

convert(300, usdCurr);
convert(300, eurCurr);

// return - возвращает какой либо результат, для его дальнейшего использования, если необходимо

const rubCurr = 34;
const discount = 0.7;

function convert (amount, curr){
    return curr * amount;
}

function promotion (result){
    console.log(result * discount);
}

// тут передаетя результат функции convert
promotion(convert(300, rubCurr));


// еще один полезный пример для работы с return, в данном случае функция останавливается сразу, как только соблюдается условие

function test (){
    for (let i = 0; i < 5; i++ ){
        console.log(i);
        if (i === 3) {
            return;
        }   
    }
    console.log("done");
}

test();