// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. 
// Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры.
// Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные".




//1) мое решение

function getTimeFromMinutes(minutes) {
    if (typeof (minutes) !== 'number' || !Number.isInteger(minutes) || minutes < 0) {
        return 'Ошибка, проверьте данные';
    }

    for (let i = 0; i < 600; i++) {

        if (minutes >= 60 % 2 === 0) {
            return 'Это ' + minutes/60 + ' часа и '  + '0 минут.';
        } else {
            const x = Math.floor(minutes/60);
            const z = (minutes/60 - x) * 60;
            const c = Math.round(z);
            return 'Это ' + x + ' часа и ' + c + ' минут.';
        }
    }
}
console.log(getTimeFromMinutes(600));

//овтет 

function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180);


// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
// Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

//2) мое решение:

function findMaxNumber(num1, num2, num3, num4) {
    if (typeof(num1) !== 'number' ||
    typeof(num2) !== 'number' ||
    typeof(num3) !== 'number' ||
    typeof(num4) !== 'number') {
    return 0;
} else {
    return Math.max(num1, num2 ,num3, num4);
}
}

console.log(findMaxNumber(1, 5, 6.6, 10.5));
console.log(findMaxNumber(1, 5, '6', '10'));

