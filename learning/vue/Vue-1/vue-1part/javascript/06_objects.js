// Objects
const person = {
    name: 'Vladilen',
    age: 26,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    'complex key': 'complex Key',
    greet() {
        console.log('greet from person')
    },
    info() {
        console.log(this)
        console.info('Информация про человека по имени ' + this.name)
    },
}

//console.log(person.name)
//console.log(person['age'])
//console.log(person["complex key"])
//person.greet()
//
//person.age++
//person.languages.push('ua')
////person['complex key'] = undefined
//delete person["complex key"]
//
//console.log(person)
//console.log(person["complex key"])
//
////const name = person.name;
////const age = person.age;
////const languages = person.languages;
//
//const {name, age: personAge = 10, languages} = person; // деструктуризация
//
//console.log(name, personAge, languages)
//
//// опасен так как может заходить в прототип
//for (let key in person) {
//    // защита
//    if(person.hasOwnProperty(key)) {
//        console.log(key)
//        console.log(person[key])
//    }
//}
//
//const keys = Object.keys(person); // array of keys by object
//
//keys.forEach((key) => {
//    console.log(key)
//    console.log(person[key])
//})
//
//person.info();
//
const logger = {
    keys() {
        console.log('Object keys:', Object.keys(this))
    },

    keysAndValues() {
        Object.keys(this).forEach((key) => {
            console.log(`"${key}": ${this[key]}`)
        })
    },

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('------------ START -------------')
        }
        Object.keys(this).forEach((key) => {
            console.log(`"${key}": ${this[key]}`)
            if (between) {
                console.log('---------------------')
            }
        })
        if (bottom) {
            console.log('-------------- END -------------')
        }
    }
}

//const bound = logger.keys.bind(person); // function
//logger.keys.call(person); // called function

//logger.keysAndValues.call(person)

//logger.withParams.call(person, true, false, true)
logger.withParams.apply(person, [true, false, true])