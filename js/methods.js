"use strict";

const str = "teSt";

//простые методы

console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str);

//поиск позиции в строке(поиск подстроки)

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

//изменение строки с помощью методов .slice / .substring / .substr

const logg = "Hello world";

//6- начало строки 11-конец строки
console.log(logg.slice(4, 11)); 
console.log(logg.substring(6,11));
// какое кол-во символов нужно вырезать начиная с 6 и заканчивая 5
console.log(logg.substr(6,5));


//числовые методы

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test)); // переводит число в другую систему исчесления
console.log(parseFloat(test));




