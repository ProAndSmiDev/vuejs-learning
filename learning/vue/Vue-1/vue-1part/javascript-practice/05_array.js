const staff = [
    {
        name: 'Andrew',
        salary: 25400,
    },
    {
        name: 'Vladilen',
        salary: 1200000,
    },
    {
        name: 'Kseniya',
        salary: 12000
    }
]

const trueSalary = staff.map((person) => {
    return (person.salary < 1000000) ? person.salary * 10 : 0;
})

console.log(trueSalary)

const books = ['История идеальной любви', 'История кошечки', 'История воплощения мечты', 'Идеальная любовь или как не попасть впросак'];
let foundedBookIndex = books.findIndex((book) => {
    return book.toLowerCase().includes('кошечки');
})

books.splice(foundedBookIndex, 1)
books[1].slice(1)

console.log(books[1])

let bookForReading = books.filter((book) => {
    return book.toLowerCase().includes('идеал')
})

console.log(bookForReading)

const pets = [
    {name: 'Буч', type: 'Собака', age: 8},
    {name: 'Бамс', type: 'Кот', age: 12},
    {name: 'Симка', type: 'Кошка', age: 7},
]

const allAges = pets.reduce((acc, pet) => {
    acc += pet.age

    return acc
}, 0)

console.log(allAges)

let allAges2 = 0
for (let pet of pets) {
    allAges2 += pet.age
}

console.log(allAges2)