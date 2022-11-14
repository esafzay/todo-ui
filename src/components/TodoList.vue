<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <p class="display-3">To Do</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mb-2">
        <form v-on:submit.prevent="addTodo" class="col-12 col-lf-6">
          <input v-model="newTask" placeholder="Create a new ToDo" type="text" class="form-control" />
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ul class="list-group">
          <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            :task="todo.task"
            :completed="todo.completed"
            @on-delete="deleteTodo(todo)"
            @on-toggle="toggleTodo(todo)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  components: {
    TodoItem
  },
  data() {
    return {
      todos: null,
      newTask: ""
    };
  },
  mounted () {
    this.getTodos()
  },
  methods: {
    getTodos() {
      fetch(this.config.crossOrigin + "/todo")
      .then(response => response.json())
      .then(data => (this.todos = data));
    },
    addTodo() {
      if (this.newTask.length > 1) {
        fetch(this.config.crossOrigin + "/todo", {
          method: 'POST',
          body: this.newTask
        }).then(() => this.getTodos());
      }
      this.newTask = "";
    },
    toggleTodo(todo) {
      fetch(this.config.crossOrigin + "/todo/" + todo.id, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: !todo.completed
      }).then(() => this.getTodos());
    },
    deleteTodo(deleteTodo) {
      fetch(this.config.crossOrigin + "/todo/" + deleteTodo.id, {
        method: 'DELETE'
      }).then(() => this.getTodos());
    }
  }
};
</script>
