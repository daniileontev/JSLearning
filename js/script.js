"use strict";
/**
 * Пример часто используемых переменных
 */ 

let number = 5;
const leftBorderWidth = 1;

number = 10;
// console.log(number);

/**
 * Простые типы данных
 */

let numberr = 4.3;
const person = "Name";
const bool = true;
// console.log(something); - null/undefined

/**
 * Комплексный тип данных - Объекты
 */

const obj = {
    name: "Даниил",
    age: "25",
    isMarried: false
};

// console.log(obj.name, obj.age, obj.isMarried);
// console.log(obj["name"],obj["age"], obj["isMarried"]);

let arr = ["a", 6, "b", "c", "d", {}, []];
// console.log(arr[0], arr[6], arr[5]); 

// alert("Добро пожаловать!");

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Сколько тебе лет?", ""); 
// console.log(answer + 5);

const answers = [];

// answers[0] = prompt('Как вас зовут?', '');
// answers[1] = prompt('Фамилия', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(answers);

/**
 * Интерполяция
 */

const category = "toys";

// console.log(`https://someurl.com/${category}/5`);

const user = "Ivan";

// alert(`Hello, ${user}`);


/**
 * Работа с операторами в JS
 */

// console.log(4 + +"5");

let incr = 10,
    decr = 10;

    incr ++; // Увеличение значения на единицу 
    decr --; // Уменьшение значения на единицу

console.log(incr);
console.log(decr);

//пример работы с оператором "и" - &&. 
const isChecked = true,
      isClose = true;

console.log(isChecked || isClose);

//пример работы с оператором "или" - ||. 
const isCheckedd = true,
      isClosee = true;

console.log(isCheckedd || isClosee);

//пример работы с оператором "отрицание" - !. 
const isCheckeddd = true,
      isCloseee = true;

console.log(isCheckeddd || !isCloseee);
