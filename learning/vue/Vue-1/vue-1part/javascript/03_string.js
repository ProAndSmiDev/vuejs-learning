// String
//const name = 'Владилен'
//const age = 26
//console.log(typeof name)
//
//function getAge() {
//    return age;
//}

//const output = 'Привет, меня зовут ' + name + ' и мой возраст: ' + age + ' лет'
//const output = `Привет, меня зовут ${name} и мой возраст: ${age < 30 > 'A' : 'B'} лет`
//const output = `
//    <div>This is div</div>
//`
//console.log(output)

//const name = 'Владилен';
//console.log(name.length) // 8
//console.log(name.toUpperCase()) // ВЛАДИЛЕН
//console.log(name.toLowerCase()) // владилен
//console.log(name.charAt(2)) // а
//console.log(name.indexOf('лен')) // 5, при false  == -1
//console.log(name.startsWith('влад')) // false, чувствителен к регистру
//console.log(name.endsWith('ен')) // true
//console.log(name.repeat(3)) // name*3
//
//const string = '    password        '
//console.log(string.trim())
//console.log(string.trimLeft())
//console.log(string.trimRight())

function logPerson(s, name, age) {
    if(age < 0) {
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Владилен'
const personAge = 26
const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
console.log(output)