const h = Vue.h;

const app = Vue.createApp({
    data() {
        return {
            title: 'Это из свойства Template'
        }
    },
    methods: {
        changeTitle() {
            return this.title = 'Изменили';
        }
    },
//    template: `
//        <div class="card center">
//            <h1>{{ title }}</h1>
//            <button class="btn" @click="title = 'Изменили'">Изменить</button>
//        </div>
//    `
    render() {
        return h('div', {
            className: 'card center'
        }, [h('h1', {}, this .title), h('button', {
            className: 'btn',
            onClick: this.changeTitle
        }, 'Изменить')]);
    }
});

app.mount('#app');