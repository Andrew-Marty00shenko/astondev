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
// const obj1 = { here: { is:
//   "on", other: "3" }, object: "Y" };

//   const obj2 = { here: { is:
//   "on", other: "2" }, object: "Y" };

const deepEqual = (obj1, obj2) => {
  let a = 0;
  let b = 0;

  for (let property in a) {
    a += 1;
  }
  for (let property in b) {
    b += 1;
    if (!(property in a) || !deepEqual(obj1[property], obj2[property])) {
      return false;
    }
  }
  return a == b;
};

//Бонус
//Задание 2 – Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
  return str.split("").reverse().join("");
}

reverseStr("abc");
