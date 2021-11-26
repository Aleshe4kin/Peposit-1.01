'use strict';


let numberOfFilms;

function start (){
    numberOfFilms = +prompt ('Сколько фильмов вы просмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ('Сколько фильмов вы просмотрели?');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
    
function rememderMyFilms (){
    let i = 0;
        while (i<2) {
        const   a = prompt ('Последний фильм?', ''),
                b = +prompt ('Какую оценку поставишь?', '');
                i++;
            if (a != null && b != null && a != '' && b != '' && a.   length < 50) {
                    personalMovieDB.movies [a] = b;
                    console.log('done');
            } else {
            console.log('error');
            i--;
    }
    }
}
rememderMyFilms ();

    function detectPersonalLevel () {
        if (personalMovieDB.count < 10) {
            alert ('Ты посмотрел мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert ('Вы классический зритель');
        } else if (personalMovieDB.count > 30){
            alert ('Вы киноман!');
        } else {
            alert ('Произошла ошибка');
        }
    }
    detectPersonalLevel ();


    function showMyDB (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
    showMyDB (personalMovieDB.privat);


    function writeYourGenres () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i-1] = prompt (`Ваш любимый жанр под номером ${i} `);
        }
    }
    writeYourGenres ();

