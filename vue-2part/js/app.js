Vue.createApp({
    data: () => ({
        myHTML: '<h1>Vue 3 App</h1>',
        title: 'Я есть Грут!',
        person: {
            firstName: 'Andrew',
            lastName: 'Smirnov',
            age: 29
        },
        items: ['1', '2', '3', '4', '5', '6', '7']
    })
}).mount('#app');