//Задание 1 – Создать объект counter всеми возможными способами;
const counter = {};
const counter = new Object();
const counter = Object.create({}, {});
const counter = Object.assign({}, {});

//Задание 2 – Скопировать объект counter всеми возможными способами;
const newCounter = { ...counter };
const newCounter = Object.assign({}, counter);
const newCounter = JSON.parse(JSON.stringify(counter));

const newCounter = {};
for (let key in counter) {
  newCounter[key] = counter[key];
}

//Задание 3 - Создать функцию makeCounter всеми описанными и возможными способами;
function makeCounter() {}
const makeCounter = function () {};
const makeCounter = () => {};

//Бонус
//Задание 1 – Написать функцию глубокого сравнения двух объектов

//Бонус
//Задание 2 – Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
  return str.split("").reverse().join("");
}

reverseStr("abc");
