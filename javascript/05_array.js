// Arrays
const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
const fib = [1, 1, 2, 3, 5, 8, 13]
const people = [
    {name: 'Vladilen', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]

//cars.push('Renault') // кладем в конец
//console.log(cars)
//
//cars.unshift('Volga') // кладем в начало
//console.log(cars)
//
//cars.shift() // возвращает и удаляет из массива первый элемент
//console.log(cars)
//
//cars.pop() // возвращает и удаляет из массива последний элемент
//console.log(cars)
//
//console.log(cars.reverse()) // переворачивает массив
//
//console.log(cars.indexOf('BMW')) // 2
//const person = people.find(function(person){
//    return person.budget === 3500
//})
//const person = people.find(person => person.budget === 3500)
//console.log(person)

//console.log(cars.includes('Mazda')) // true-false

//const upperCaseCars = cars.map((car) => { // не изменяет начальный массив
//    return car.toUpperCase()
//})
//console.log(upperCaseCars)
//
//const pow2 = num => num ** 2
//
//const pow2Fib = fib.map(pow2)
//const filteredNumbers = pow2Fib.filter( num => num > 20) // если true то элемент остается в массиве
//console.log(filteredNumbers)

const allBudget = people.filter(person => person.budget > 2000).reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)

console.log(allBudget) // 7700



// Задача 1
const text = 'Привет, мы изучаем JavaScript'
const reverseText = text.split(',').reverse().join('') // разделяем строку по запятой потом переворачиваем текст и объединяем обратно в строку
console.log(reverseText)

