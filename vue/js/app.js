const App = {
    data() {
        return {
            placeholder: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2']
        }
    },
    methods: {
        addNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue);
            }
        },

        clearInput() {
            this.inputValue = '';
        },

        deleteNote(index) {
            this.notes.splice(index, 1);
        }
    },
    computed: {
        countNotes() {
            return this.notes.length;
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = '';
            }
        }
    }
};

const app = Vue.createApp(App);

app.mount('#app');