// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. 
// Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.
// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии




function fib(n) {

    let f0 = 0;
    let f1 = 1;
    let fn;

    console.log(f0 + ' ' + f1 + ' ');

    for(let i = 3; i<n; i++){
        fn = f0 + f1;
        f0 = f1;
        f1 = fn

    }

    
}
console.log(fib(3));