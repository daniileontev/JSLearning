"use strict";


//создание объекта, данный пример создания объекта внутри объекта
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    // создаем свой метод, который будет работать внутри объекта
    makeTest: function(){
        console.log("Test");
    }
};

options.makeTest();

// деструкторизация объекта, вынос переменных в качестве отдельных структур
const {border, bg} = options.colors;
console.log(border, bg);

// метод object keys, берет объект и на его основании создает массив, 
// в котором элементы, это ключи находящиеся в первой части пар ключ: 'значение'
// так как у строк и массивов есть свойство .length, можно получить кол-во элементов из массива

// console.log(Object.keys(options).length);

// console.log(options["colors"] ["border"]);

//удаление конкретного свойства из конкретного объекта

// delete options.name; 
// console.log(options);


// такой цикл будет работать столько раз, сколько свойств находится внутри объекта
// простой пример перебора объекта for (let key in ...)
// перебор всех свойств и ключей внутри объекта + вложенного объекта

for (let key in options) {
    // можно проверять значения ключей через условия
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

// прием счетчика кол-ва свойств в объекте

let counter = 0;

for (let key in options) {
    // можно проверять значения ключей через условия
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);