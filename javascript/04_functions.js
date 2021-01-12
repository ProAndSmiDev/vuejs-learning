// functions
// Function Declaration
//function greet() {
//    console.log('Привет', name, '!')
//}

// Function Expression - нельзя сперва вызвать
//const greet2 = function greet2(name) {
//    console.log('Привет2', name, '!')
//}

//greet('Лена')
//greet2('Лена')
//console.log(typeof greet)

//console.dir(greet)

// 2. Анонимные функции
//let counter = 0
//setInterval(function() {
//    console.log(++counter)
//}, 1000)

// 3. Стрелочные функции
//const greet = (name) => console.log('Привет', name, '!')
//greet('Andrew')

//const pow2 = num => num ** 2
//console.log(pow2)

// 4. Параметры по умолчанию
//const sum = (a = 40, b = a * 2) => a + b // 120
//console.log(sum(41, 4)) // 45
//console.log(sum()) // 120
//
//function sumAll(...all) { // оператор rest
//    let result = 0
//    for (let num of all) {
//        result += num
//    }
//
//    return result
//}
//const res = sumAll(1, 2, 3, 4, 5, 6, 7) // 28
//console.log(res) // 28

// 5. Замыкания
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

createMember('Vladilen')('Minin');