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
    }),
    computed: {
        eventItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    },
    methods: {
        addItem() {
            this.items.unshift(this.$refs.myInput.value);
            this.$refs.myInput.value = '';
        },
        remove(idx) {
            this.items.splice(idx, 1);
        },
        log(item) {
            console.log(item)
        }
    }
}).mount('#app');