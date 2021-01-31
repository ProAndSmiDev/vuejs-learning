// 1. Переменные
// camelCase
// const firstName = 'Vladilen';
//const age = 26;
// const isProgrammer = true;

// 2. Мутирование
// console.log('Имя человека: ' + firstname + ', Возраст: ' + age);
// const lastName = prompt('Введите фамилию');
// alert(firstname + ' ' + lastname);

// 3. Операторы
// const currentYear = 2020;
// const birthYear = 1993;
// const age = currentYear - birthYear;
//
// console.log(age);
//
// let a = 10;
// const b = 5;
// let c = 32;
//
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a++);
// console.log();

// 4. Типы данных
// const isProgrammer = true;
// const firstName = 'Vladilen';
// const age = 26;
// let x;
// console.log(typeof isProgrammer);
// console.log(typeof firstName);
// console.log(typeof age);
// console.log(typeof x);
// console.log(typeof null);

// 5. Приоритет операторов
//const fullAge = 26;
//const birtYear = 1993;
//const currentYear = 2020;
//
//const isFullAge = currentYear - birtYear >= fullAge;
//console.log(isFullAge);

// 6. Условные операторы
//const courseStatus = 'failed'; // ready, failed, pending
//
//if (courseStatus === 'ready') {
//    console.log('Курс уже готов и его можно проходить');
//} else if (courseStatus === 'pending') {
//    console.log('Курс пока находится в процессе разработки');
//} else {
//    console.log('Курс не готов');
//}
//
//const isReady = true;

//if(isReady) {
//    console.log('Курс готов');
//} else {
//    console.log('Курс не готов');
//}

// Тернарное выражение
//isReady ? console.log('Курс готов') : console.log('Курс не готов');

//const num1 = 42; // number
//const num2 = '42'; // string
//
//console.log(num1 === num2);

// 7. Логические операторы
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators#%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 8. Функции
//function calculateAge(year) {
//    return 2020 - year;
//}

//console.log(calculateAge(1993));
//console.log(calculateAge(2010));

//function logInfoAbout(name, year) {
//    const age = calculateAge(year);
//
//    if (age > 0) {
//        console.log('Имя: ' + name + 'Возраст: ' + age);
//    } else {
//        console.log('Вы еще не родились');
//    }
//}
//
//logInfoAbout('Владилен', 1993);

// 9. Массивы
//const cars = new Array('Mazda', 'Mercedes', 'Ford');
//const cars = ['Mazda', 'Mercedes', 'Ford'];
//console.log(cars);
//console.log(cars.length);
//
//console.log(cars[0]);
//console.log(cars[1]);
//console.log(cars[3]);
//
//cars[0] = 'Porsche';
//cars[3] = 'Mazda'; // cars[cars.length] = 'Mazda'
//console.log(cars);

// 10. Циклы
//for (let i = 0; i < cars.length; i++) {
//    const car = cars[i];
//    console.log(car);
//}

//for (let car of cars) {
//    console.log(car);
//}

// 11. Объекты
const person = {
    firstName: 'Vladilen',
    lastName: 'Minin',
    year: 1993,
    langs: ['Ru', 'En', 'De'],
    hasWife: false,
    greet: function() {
        console.log('greet');
    }
};

console.log(person.firstName);
console.log(person['lastName']);
const key = 'langs';
person.hasWife = true;
person.isProgrammer = true;
console.log(person[key]);
console.log(person);
person.greet();