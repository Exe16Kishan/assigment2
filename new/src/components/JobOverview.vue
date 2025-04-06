<template>
    <div class="job-overview">
      <h3>Welcome to Job Explorer</h3>
      <p>Browse through our curated job listings to find your perfect opportunity.</p>
      
      <div class="stats mt-4">
        <h4>Quick Stats</h4>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Total Jobs
            <span class="badge bg-primary rounded-pill">{{ jobs.length }}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            AI Jobs
            <span class="badge bg-primary rounded-pill">{{ aiJobsCount }}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Remote Jobs
            <span class="badge bg-primary rounded-pill">{{ remoteJobsCount }}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Internships
            <span class="badge bg-primary rounded-pill">{{ internshipCount }}</span>
          </li>
        </ul>
      </div>
      
      <div class="categories mt-4">
        <h4>Categories</h4>
        <div class="d-flex flex-wrap">
          <span v-for="(count, category) in categories" :key="category" class="badge bg-secondary me-2 mb-2 p-2">
            {{ category }}: {{ count }}
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'JobOverview',
    props: {
      jobs: {
        type: Array,
        required: true
      }
    },
    computed: {
      aiJobsCount() {
        return this.jobs.filter(job => job.category === 'AI').length
      },
      remoteJobsCount() {
        return this.jobs.filter(job => job.location === 'Remote').length
      },
      internshipCount() {
        return this.jobs.filter(job => job.employment_type === 'Internship').length
      },
      categories() {
        const categoryCount = {}
        this.jobs.forEach(job => {
          if (categoryCount[job.category]) {
            categoryCount[job.category]++
          } else {
            categoryCount[job.category] = 1
          }
        })
        return categoryCount
      }
    }
  }
  </script>