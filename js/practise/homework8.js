// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. 
// Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.
// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии




function fib(n) {
    if (typeof(n) !== 'number' || n <= 0 || !Number.isInteger(n)) {
        return "";
    }

    let f0 = 0;
    let f1 = 1;
    let fn = '';

    for(let i = 0; i < n; i++){
        if(i + 1 === n){
            fn += f0;
        } else {
            fn += f0 + ' ';
        } 
        let fnn = f0 + f1
        f0 = f1;
        f1 = fnn

    }

    return fn
}
console.log(fib(5)); 


//еще одно решение без рекурсии:

function fibonaci(num){
    const result = [0, 1];

    for(let i = 2; i <= num; i++){

        const prevNumber1 = result[i - 1];
        const prevNumber2 = result[i - 2];
        result.push(prevNumber1+ prevNumber2);
    }

    return result[num];
}

console.log(fibonaci(7));