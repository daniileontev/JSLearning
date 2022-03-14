"use strict";

// массив = структура данных, распределенных по порядку

const arr = [1, 13, 3, 2, 8];

//шаблон сортировки массива с цифрами(int), можно создать отдельную функцию и модифицировать ее как хочешь,
//можно поместить callBack функцию внутри метода .sort()ниже приведены оба примера
arr.sort((a, b) => a - b); //1-8
console.log(arr);

arr.sort(compareNum);
console.log(arr);

function compareNum (a, b){
    return a - b; //1-8
    // return b - a; //8-1
}

//обращение к массиву через метод forEach, позволяет перебрать элементы внутри массива, но его можно настроить
arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

//метод pop() последний эллемент с конца массива
arr.pop();

//метод push(10) добавляет эллемент в конце массива 
arr.push(10);

//перебор массива, до тех пор, пока не закончатся элементы внутри массива
for(let i = 0; i <arr.length; i++){
    console.log(arr[i]);
}

// привод строки, в массив. Например от пользователя получаем информацию в виде строки(список продуктов), и преобразуем его в массив 
const str = prompt("", "");
const products = str.split(", ");
console.log(products);

// обратная работа
const string = prompt("", "");
const names = string.split(", ");
console.log(names.join('; '));

// метод сортировки sort(), со строками сортировка происходит в алфавитном порядке
const s = prompt("", "");
const n = s.split(", ");
n.sort();
console.log(n.join('; '));