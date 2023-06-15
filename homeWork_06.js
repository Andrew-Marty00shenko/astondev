//1)

console.log("1"); //1

setTimeout(() => console.log("2"), 1); //6

let promiseNew = new Promise((resolve) => {
  console.log("3");
  resolve();
}); //2

promiseNew.then(() => console.log("4")); //4

setTimeout(() => console.log("5")); //5

console.log("6"); //3

//2)
let promiseTree = new Promise((resolve, reject) => {
  resolve("a");

  console.log("1"); //1

  setTimeout(() => {
    console.log("2"); //2
  }, 0);

  console.log("3"); //3
});

//3)
let promiseTwo = new Promise((resolve, reject) => {
  resolve("a");
});

promiseTwo
  .then((res) => {
    return res + "b";
  })
  .then((res) => {
    return res + "с";
  })
  .finally((res) => {
    return res + "!!!!!!!";
  })
  .catch((res) => {
    return res + "d";
  })
  .then((res) => {
    console.log(res); //abc
  });

//4)
function doSmth() {
  return Promise.resolve("123");
}

doSmth()
  .then(function (a) {
    console.log("1", a); //123
    return a;
  })
  .then(function (b) {
    console.log("2", b); //123
    return Promise.reject("321");
  })
  .catch(function (err) {
    console.log("3", err); //321
  })
  .then(function (c) {
    console.log("4", c); //undefined
    return c;
  });

//5)console.log("1");
setTimeout(function () {
  console.log("2"); //3
}, 0);

Promise.resolve().then(() => console.log("3")); //2

console.log("4"); //1

//6) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
//Входные данные: [10, 12, 15, 21]

let arr = [10, 12, 15, 21];

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(i);
  }, 3000);
}
