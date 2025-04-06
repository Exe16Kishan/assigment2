<template>
    <div v-if="job" class="job-detail">
      <h3>{{ job.job_title }}</h3>
      <h5 class="text-muted">{{ job.job_id }} | {{ job.company }}</h5>
      
      <div class="badge bg-primary me-2">{{ job.category }}</div>
      <div class="badge bg-info me-2">{{ job.location }}</div>
      <div class="badge bg-secondary">{{ job.employment_type }}</div>
      
      <hr />
      
      <div class="row mt-3">
        <div class="col-md-6">
          <h5>Job Details</h5>
          <ul class="list-group">
            <li class="list-group-item"><strong>Salary:</strong> {{ job.salary_range }}</li>
            <li class="list-group-item"><strong>Level:</strong> {{ job.job_level }}</li>
            <li class="list-group-item"><strong>Positions:</strong> {{ job.positions_available }}</li>
            <li class="list-group-item"><strong>Start Date:</strong> {{ job.start_date }}</li>
            <li class="list-group-item"><strong>Supervisor:</strong> {{ job.supervisor }}</li>
          </ul>
        </div>
        
        <div class="col-md-6">
          <h5>Important Dates</h5>
          <ul class="list-group">
            <li class="list-group-item"><strong>Posted:</strong> {{ job.posted_date }}</li>
            <li class="list-group-item"><strong>Deadline:</strong> {{ job.application_deadline }}</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-4">
        <h5>Job Description</h5>
        <p>{{ job.job_description }}</p>
      </div>
      
      <div class="row mt-3">
        <div class="col-md-6">
          <h5>Required Skills</h5>
          <ul>
            <li v-for="(skill, index) in job.required_skills" :key="index">{{ skill }}</li>
          </ul>
        </div>
        
        <div class="col-md-6">
          <h5>Preferred Qualifications</h5>
          <ul>
            <li v-for="(qual, index) in job.preferred_qualifications" :key="index">{{ qual }}</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-3">
        <h5>Tags</h5>
        <div v-for="tag in job.tags" :key="tag" class="badge bg-light text-dark me-2">
          #{{ tag }}
        </div>
      </div>
    </div>
    
    <div v-else class="alert alert-warning">
      Job not found. Please select a valid job from the list.
    </div>
  </template>
  
  <script>
  export default {
    name: 'JobDetail',
    props: {
      id: {
        type: String,
        required: true
      },
      jobs: {
        type: Array,
        required: true
      }
    },
    computed: {
      job() {
        return this.jobs.find(job => job.job_id === this.id)
      }
    }
  }
  </script>