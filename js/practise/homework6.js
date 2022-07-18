//1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций).
// Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки.

// 1) мое решение

function calculateVolumeAndArea(side) {

    if (Number.isInteger(side)) {
            const valueResult = Math.pow(side, 3);
            const squareResult = 6 * (Math.pow(side, 2));
            return 'Объем куба:' + valueResult + ' площадь всей поверхности:' + squareResult;
        } else {
            return 'При вычислении произошла ошибка';
        }
    }

console.log(calculateVolumeAndArea(5.5));


// вариант решения из ответа:
function calculateVolumeAndArea(length) {
    if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;
    
    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);


// 2) Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Функция принимает только  целое число от 1 до 36. 
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:"Ошибка. Проверьте правильность введенного номера места" 
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

function getCoupeNumber(seat) {

    if(typeof(seat) !== 'number' || seat > 36 || !Number.isInteger(seat) ){
        return 'Ошибка. Проверьте правильность введенного номера места';
    }
    if(seat === 0 || seat > 36){
        return 'Таких мест в вагоне не существует';
    }

    for (let i = 4; i <=36; i = i + 4){
        if(seat <= i){
            return i/4;
        }
    }

}

console.log(getCoupeNumber(10));


function check (num){
    return typeof(num) !== 'number';
}
console.log(check());
