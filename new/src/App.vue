<template>
  <div class="container-fluid">
    <header class="bg-primary text-white p-4 mb-4">
      <h1>Insight Hire</h1>
    </header>
    
    <div class="row">
      <div class="col-md-12 mb-4">
        <h2>Job Explorer</h2>
        <div class="card">
          <div class="card-body">
            <router-view />
          </div>
        </div>
      </div>
      
      <div class="col-md-6 mb-4">
        <h2>Application Form</h2>
        <div class="card">
          <div class="card-body">
            <ApplicationForm />
          </div>
        </div>
      </div>
      
      <div class="col-md-6 mb-4">
        <h2>To-Do List</h2>
        <div class="card">
          <div class="card-body">
            <ToDoList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApplicationForm from './components/ApplicationForm.vue'
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    ApplicationForm,
    ToDoList
  }
}
</script>

<style>
body {
  background-color: #f8f9fa;
  padding: 20px 0;
}
</style>