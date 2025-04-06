<template>
    <div class="todo-list">
      <div class="row mb-4">
        <div class="col-md-8">
          <input 
            type="text" 
            class="form-control" 
            placeholder="Enter a new task" 
            v-model="newTask"
            @keyup.enter="addTask"
          >
        </div>
        <div class="col-md-4">
          <button class="btn btn-primary w-100" @click="addTask">Add Task</button>
        </div>
      </div>
      
      <div v-if="tasks.length === 0" class="alert alert-info">
        No tasks yet. Add a task to get started!
      </div>
      
      <ul class="list-group" v-else>
        <li v-for="(task, index) in tasks" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            {{ task.text }} 
            <span v-if="task.priority === 'high'" class="text-danger">(High Priority)</span>
            <span v-else-if="task.priority === 'low'" class="text-success">(Low Priority)</span>
          </div>
          <div>
            <button 
              class="btn btn-sm"
              :class="task.priority === 'high' ? 'btn-success' : 'btn-danger'"
              @click="togglePriority(index)"
            >
              {{ task.priority === 'high' ? 'Mark as Low Priority' : 'Mark as High Priority' }}
            </button>
            <button class="btn btn-sm btn-outline-danger ms-2" @click="deleteTask(index)">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ToDoList',
    data() {
      return {
        newTask: '',
        tasks: []
      }
    },
    methods: {
      addTask() {
        if (this.newTask.trim()) {
          this.tasks.unshift({
            text: this.newTask,
            priority: 'none'
          })
          this.newTask = ''
        }
      },
      togglePriority(index) {
        if (this.tasks[index].priority === 'high') {
          this.tasks[index].priority = 'low'
        } else {
          this.tasks[index].priority = 'high'
        }
      },
      deleteTask(index) {
        this.tasks.splice(index, 1)
      }
    }
  }
  </script>