/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

function deleteAdv() {
  //задание 1
  let promo = document.querySelector(".promo__adv");
  promo.innerHTML = "";
}

function changeGenre() {
  //задание 2
  let genre = document.querySelector(".promo__genre");
  genre.textContent = "драма";
}

function changeBackground() {
  //задание 3
  let image = document.querySelector(".promo__bg");
  image.style.background = `url("../img/bg.jpg")`;
}

function changeFilmList() {
  //задание 4-5
  let films = document.querySelectorAll(".promo__interactive-item");
  movieDB.movies.sort();
  films.forEach(
    (film, index) =>
      (film.textContent = index + 1 + ". " + movieDB.movies[index])
  );
}

deleteAdv();
changeGenre();
changeBackground();
changeFilmList();
