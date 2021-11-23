class Todo {
    constructor({title, done}) {
        this.title = title;
        this.done = done;
    }
}
const app = new Vue({
    el: "#app",
    data: {
        title: "Hello SYTWS!",
        newTodo: "",
        todos: []
    },
    methods: {
        addTodo: function() {
            console.log("form submitted! "+this.newTodo);
            this.todos.push(new Todo({ title: this.newTodo, done: false}));
            console.log(this.todos.map(x => x.title))
        }
    }
})