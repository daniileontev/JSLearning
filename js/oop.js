"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

//простой пример прототипного наследования, с устаревшим форматом

const soldier = {
    health: 400,
    armor: 100,
    //пример с простейшим применением функции, при наследовании
    sayHello: function(){
        console.log("Hello!");
    }
};

const jonh = {
    health: 100
};

//устаревшая версия наследования, встречается редко
jonh.__proto__ = soldier;

console.log(jonh);
jonh.sayHello();


//простой пример прототипного наследования, с новым форматом
const unit = {
    health: 400,
    armor: 100,
    //пример с простейшим применением функции, при наследовании
    sayHello: function(){
        console.log("Hello!");
    }
};

//создаем новый обьект trooper, который будет наследоваться от прототипа unit
const trooper = Object.create(unit);

unit.sayHello();
Object.setPrototypeOf(trooper, unit);