//1) Какие бывают алгоритмы сортировок ?
сортировка пузырьком, сортировка вставками, сортировка выбором, быстрая сортировка, сортировка Шелла, куча

//3) Создать объект Person несколькими способами, после создать объект Person2, 
// чтобы в нём были доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам.

//Способ 1.
function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.sayHello = function(){
    console.log(`${this.firstname} say hello!`)
}

Person.prototype.logInfo = function(){
    console.log(`Firstname: ${this.firstname}, Lastname: ${this.lastname}`)
}

const person = new Person("Andrew", "Martyshenko");
const person2 = Object.create(Person.prototype);

person2.firstname = "Alex";
person2.lastname = "Mart"

person2.sayHello()
person2.logInfo()

//Способ 2.
const person ={
    firstname: "Andrew",
    lastname: "Martyshenko",
    sayHello: function(){
        console.log(`${this.firstname} say hello!`)
    },
    logInfo: function(){
        console.log(`Firstname: ${this.firstname}, Lastname: ${this.lastname}`)
    }
}

const person2 = Object.create(person);
person2.firstname = "Alex";
person2.lastname = "Mart";

person2.sayHello()
person2.logInfo()

//Сбособ 3.
class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    sayHello(){
        console.log(`${this.firstname} say hello!`)
    }

    static logInfo(person){
        console.log(`Firstname: ${person.firstname}, Lastname: ${person.lastname}`)
    }
}

const person = new Person("Andrew", "Martyshenko");
const person2 = Object.create(person);

person2.firstname = "Alex";
person2.lastname = "Mart";

person.sayHello();
Person.logInfo(person);

person2.sayHello()
Person.logInfo(person2);

// 4) Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.
class PersonThree extends Person {
    get firstname(){
        return this._firstname;
    }

    set firstname(name){
        this._firstname = name;
    }

    constructor (firstname, lastname, hobby){
        super(firstname, lastname);
        this.hobby = hobby;
    }

    getHobby(){
        console.log(this.hobby);
    }
}

const personThree = new PersonThree("Sergey", "Miron", "Programming");
console.log(personThree.firstname)
personThree.firstname = "Valik";
console.log(personThree.firstname)

//БОНУС: 
//1) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
//result = [4, 9]

const firstSum = (arr, total) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right){
        const sum = arr[left] + arr[right];

        if(sum === total){
            return [arr[left],arr[right]];
        }else if(sum < total){
            left++;
        }else{
            right--;
        }
    }

    return null;
}

firstSum(arr,total)

// Big O(n);
