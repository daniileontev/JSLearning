"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/**
 * Мой вариант выполнения
 */

// const lastWatchedMovie = prompt("Какой последний фильм вы посмотрели?", "");
// const review = prompt("На сколько оцените его? от 1 до 10", "");
// personalMovieDB.movies[lastWatchedMovie] = review;
// console.log(personalMovieDB);

/**
 * Ответ
 */

const a = prompt("Какой последний фильм вы посмотрели?", ""),
    b = prompt("На сколько оцените его? от 1 до 10", ""),
    c = prompt("Какой последний фильм вы посмотрели?", ""),
    d = prompt("На сколько оцените его? от 1 до 10", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);