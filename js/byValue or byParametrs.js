"use strict";

let a = 5,
    b = a;

b = b + 5;
console.log(b);
console.log(a);


//Пример передачи по ССЫЛКЕ

const obj = {
    a: 5,
    b: 6,
};

const copy = obj; // в данном случае передается не структура объекта, а ССЫЛКА на уже существующий объект
copy.a = 10;

console.log(copy);
console.log(obj);

// Создание копии обьектов, массивов, и тд


//пример создания поверхностной копии, при помощи ЦИКЛА
function duplicate(mainObject){
    let objCopy = {};

    let key;
    for(key in mainObject){
        objCopy[key] = mainObject[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 8,
        y: 4
    }
};

const newNumbers = duplicate(numbers);

newNumbers.a = 10;
// при обращении к свойству(с) внутри объекта,это свойство будет имееть ССЫЛОЧНЫЙ типа данных
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);


//Object.assign() позволяет соединить сразу несколько объектов
const add = {
    d: 17,
    e: 20
};

//итогом получается независимая от add или numbers поверхностная копия
console.log(Object.assign(numbers, add));

//тоже самое можно сделать с пустым объектом
const clone = Object.assign({}, add);
clone.d = 20;

console.log(add);
//в clone лежит поверхностная копия add
console.log(clone);


//пример создание поверхностной копии в массиве
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); //без .slice() будет ссылка, не копия

newArray[1] = 'asdasdasd';
console.log(newArray);
console.log(oldArray);


//пример создания поверхностной копии через оператор spread '...value'
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'jojo'];
console.log(internet);

//более сложный пример

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

//например пришли данные с сервера под значениями 2, 5, 7 
const num = [2, 5, 7];

log(...num);

// еще один способ через spread оператор

const array = ["a", "b"];
const copyArray = [...array];

console.log(copyArray);

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(newObj);