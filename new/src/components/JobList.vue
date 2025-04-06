<template>
    <div class="row">
      <div class="col-md-3">
        <div class="list-group">
          <router-link to="/" class="list-group-item list-group-item-action" exact>
            Overview
          </router-link>
          <router-link 
            v-for="job in jobs" 
            :key="job.job_id" 
            :to="{ name: 'job-detail', params: { id: job.job_id }}" 
            class="list-group-item list-group-item-action"
          >
            {{ job.job_id }}
          </router-link>
        </div>
      </div>
      
      <div class="col-md-9">
        <router-view :jobs="jobs" />
      </div>
    </div>
  </template>
  
  <script>
  import { jobData } from "./job.js";
  export default {
    name: 'JobList',
    data() {
      return {
        jobs: jobData
      }
    }
  }
  </script>