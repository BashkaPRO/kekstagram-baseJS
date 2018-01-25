'use strict';

var COUNT_PHOTOS = 25;
var COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

// Найдем элемент в который мы будем вставлять наши изображения
var picturesList = document.querySelector('.pictures');

// Найдем шаблон который мы будем копировать.
var picturesTemplate = document.querySelector('#picture-template').content;

var listNotes = generateNotes();

// Отрисуем наш шаблон в документ
for (var i = 1; i < listNotes.length + 1; i++) {
  var picturesElement = picturesTemplate.cloneNode(true);
  picturesElement.querySelector('.picture img').src = listNotes[i].url;
  picturesElement.querySelector('.picture-likes').textContent = listNotes[i].likes;
  picturesElement.querySelector('.picture-comments').textContent = listNotes[i].comments;
  picturesList.appendChild(picturesElement);
}

// Функция, возвращающаая массив объектов записей в блоге
function generateNotes() {
  var notes = [];
  for (var i = 0; i < COUNT_PHOTOS + 1; i++) {
    notes.push({
      url: 'photos/' + i + '.jpg',
      likes: getRandomNumber(15, 200),
      comments: getRandomElement(COMMENTS)
    });
  }
  return notes;
}

// Функция, возвращающая случайное число в диапазоне
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция, возвращающая случайный элемемент массива
function getRandomElement(array) {
  for (var i = 0; i < array.length; i++) {
    var randomIndex = Math.floor(Math.random() * array.length);
  }
  var randomElement = array[randomIndex];
  return randomElement;
}
