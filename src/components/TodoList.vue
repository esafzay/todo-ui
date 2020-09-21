<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <p class="display-3">To Do</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mb-2">
        <NewTodo @on-addtodo="addTodo($event)" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ul class="list-group">
          <Todo
            v-for="(todo, index) in todos"
            :key="index"
            :todoString="todo.todoString"
            :completed="todo.completed"
            @on-delete="deleteTodo(todo)"
            @on-toggle="toggleTodo(todo)"
            @on-edit="editTodo(todo, $event)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo";
import NewTodo from "./NewTodo";
export default {
  components: {
    Todo,
    NewTodo
  },
  data() {
    return {
      todos: null
    };
  },
  mounted () {
    fetch("https://run.mocky.io/v3/cef4cab2-5ad3-459b-9bf1-d7aaef676045")
    .then(response => response.json())
    .then(data => (this.todos = data));
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push({
        todoString: newTodo,
        completed: false
      });
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    editTodo(todo, newTodoString) {
      todo.todoString = newTodoString;
    },
    deleteTodo(deleteTodo) {
      this.todos = this.todos.filter(todo => todo !== deleteTodo);
    }
  }
};
</script>
