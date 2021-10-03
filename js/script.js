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

/**
 * Условия
 */

if (4==9) {
    console.log("ok");
} else {
    console.log("Not ok");
}

// пример вложенного условия

const num = 50;

if (num < 49 ) {
    console.log("Error");
} else if (num > 100){
    console.log("Error");
} else {
    console.log("Норм");
}

// тернарный оператор

(num === 50) ? console.log("Норм") : console.log("Error");

// более удобная конструкция if else - switch, всегда строгое сравнение

const numm = 50;

switch (numm) { 
    case 49:
        console.log("no");
        break;
    case 100:
        console.log("no");
        break;
    case 53:
        console.log("yes");
        break;
    default:
        console.log("no no");
        break;
}

/**
 * Циклы
 */

let n = 50;

// while(n <= 55){
//     console.log(n);
//     n++;
// }

//Проверка условий и при необходимости выход из цикла

do{
    console.log(n);
    n++;
}
while(n<55);

// дефолтный for + условия для остановки/пропуска нужных значений

for (let i = 1; i<8; i++){
    if (i === 6){
        // break;
        continue;
    }
    console.log(i);

}