//Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?

Потому что массивы в js объединяют сразу несколько видов структур данных.
В массив можно вложить что угодно, будь то примитивы, объекты, другие массивы, вложенные массивы и тд.
Структура данных массив может быть и стэком и очередью

//Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

const loggerBind = logger.bind(obj, null)
loggerBind();

logger.call(obj, null);
logger.apply(obj, [null]);

//Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

const bind = (cb, context, ...spread) => (...args) =>
  cb.apply(context, [...spread, ...args]);

function logger() {
  return `${this.value}`;
}

const obj = { value: "some value" };
const objBind = bind(logger, obj);

console.log(objBind());
