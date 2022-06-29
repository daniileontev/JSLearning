"use strict";

//dynamic typing = изменения типа данных из одного в другое(строка в число и наоборот)

//To String

console.log(typeof(String(null)));
console.log(typeof(String(4)));

//Канкотинация

console.log(typeof(5+''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

//на примере формаирования стилей 

const fontSize = 25 + 'px';

//To Number

console.log(typeof(Number('5')));

//Унарный плюс

console.log(typeof(+'5'));

//метод parseInt
console.log(typeof(parseInt("16px", 10)));

// Все данные что мы получаем от пользователя, будут с типом String
let answer = +prompt("Hello", "");

// To boolean

0, '', null, undefined, NaN; //всегда false

let switcher = null;

if(switcher){
    console.log("Working...");
}

//происходит изменение в параметре, в таком случае он уже не равен Null и метод if возвращает нам значение

switcher = 1;

if(switcher){
    console.log("Working...");
}


// 2способ приведения к boolean

console.log(typeof(Boolean('4')));

// 3 способ приведения к boolean

console.log(typeof(!!"44444444"));
