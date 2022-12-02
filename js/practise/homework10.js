// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// ответ
function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `;
    });

    return str;
}
// мое решение
function showFamily(arr) {
    let famLen = arr;
    let str = '';
    for (var i = 0; i < famLen.length; i++) {
        str += 'Семья состоит из: ' + famLen;
        return str;
    }

    if (str === '') {
        return 'Семья пуста';
    }

}
// 2)напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
// Пример:
// standardizeStrings(favoriteCities)  выведет в консоль
//     lisbon
//     rome
//     milan
//     dublin
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
// мое решение
function standardizeStrings(arr) {
    let str = '';
    arr.forEach(string =>{
        str += `${string.toLowerCase()}\n`;
    });
    return str;
}
// console.log(standardizeStrings(favoriteCities));
//ответ 

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}
console.log(standardizeStrings(favoriteCities));