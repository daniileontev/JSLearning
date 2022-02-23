"use strict";

function first(){
    // какие либо действия
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}

first();
second();

//если функции идут одна за другой, не всегда они выполняются в том же порядке

//collback функция, это функция которая должна быть выполнена после того, как другая функция завершила свое выполнение

function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`); // первая функция
    callback(); //вторая функция 
}

function done(){
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);


// callback не дает исполняться определенному коду, пока другой код не завершит свое исполнение

