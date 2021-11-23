const app = new Vue({
    el: "#app",
    data: {
        title: "Hello SYTWS!",
        newTodo: ""
    },
    methods: {
        addTodo: function() {
            console.log("form submitted! "+this.newTodo)
        }
    }
})