<template>
    <div class="application-form">
      <form method="post" action="http://mercury.swin.edu.au/it000000/formtest.php" @submit="validateForm">
        <!-- Personal Information -->
        <fieldset>
          <legend>Personal Information</legend>
          
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="firstName" class="form-label">First Name*</label>
              <input 
                type="text" 
                class="form-control" 
                id="firstName" 
                name="firstName" 
                v-model="form.firstName"
                :class="{'is-invalid': errors.firstName}"
                required
              >
              <div class="invalid-feedback">{{ errors.firstName }}</div>
            </div>
            
            <div class="col-md-6">
              <label for="lastName" class="form-label">Last Name*</label>
              <input 
                type="text" 
                class="form-control" 
                id="lastName" 
                name="lastName" 
                v-model="form.lastName"
                :class="{'is-invalid': errors.lastName}"
                required
              >
              <div class="invalid-feedback">{{ errors.lastName }}</div>
            </div>
          </div>
          
          <div class="mb-3">
            <label for="dob" class="form-label">Date of Birth*</label>
            <input 
              type="date" 
              class="form-control" 
              id="dob" 
              name="dob" 
              v-model="form.dob"
              :class="{'is-invalid': errors.dob}"
              required
            >
            <div class="invalid-feedback">{{ errors.dob }}</div>
          </div>
        </fieldset>
        
        <!-- Account Information -->
        <fieldset class="mt-4">
          <legend>Account Information</legend>
          
          <div class="mb-3">
            <label for="username" class="form-label">Username*</label>
            <input 
              type="text" 
              class="form-control" 
              id="username" 
              name="username" 
              v-model="form.username"
              :class="{'is-invalid': errors.username}"
              required
            >
            <div class="invalid-feedback">{{ errors.username }}</div>
          </div>
          
          <div class="mb-3">
            <label for="password" class="form-label">Password*</label>
            <input 
              type="password" 
              class="form-control" 
              id="password" 
              name="password" 
              v-model="form.password"
              :class="{'is-invalid': errors.password}"
              required
            >
            <div class="invalid-feedback">{{ errors.password }}</div>
          </div>
          
          <div class="mb-3">
            <label for="confirmPassword" class="form-label">Confirm Password*</label>
            <input 
              type="password" 
              class="form-control" 
              id="confirmPassword" 
              name="confirmPassword" 
              v-model="form.confirmPassword"
              :class="{'is-invalid': errors.confirmPassword}"
              required
            >
            <div class="invalid-feedback">{{ errors.confirmPassword }}</div>
          </div>
          
          <div class="mb-3">
            <label for="email" class="form-label">Email*</label>
            <input 
              type="email" 
              class="form-control" 
              id="email" 
              name="email" 
              v-model="form.email"
              :class="{'is-invalid': errors.email}"
              required
            >
            <div class="invalid-feedback">{{ errors.email }}</div>
          </div>
        </fieldset>
        
        <!-- Contact Information -->
        <fieldset class="mt-4">
          <legend>Contact Information</legend>
          
          <div class="mb-3">
            <label for="street" class="form-label">Street Address</label>
            <input 
              type="text" 
              class="form-control" 
              id="street" 
              name="street" 
              v-model="form.street"
              :class="{'is-invalid': errors.street}"
            >
            <div class="invalid-feedback">{{ errors.street }}</div>
          </div>
          
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="suburb" class="form-label">Suburb</label>
              <input 
                type="text" 
                class="form-control" 
                id="suburb" 
                name="suburb" 
                v-model="form.suburb"
                :class="{'is-invalid': errors.suburb}"
              >
              <div class="invalid-feedback">{{ errors.suburb }}</div>
            </div>
            
            <div class="col-md-6">
              <label for="postcode" class="form-label">Postcode*</label>
              <input 
                type="text" 
                class="form-control" 
                id="postcode" 
                name="postcode" 
                v-model="form.postcode"
                :class="{'is-invalid': errors.postcode}"
                required
              >
              <div class="invalid-feedback">{{ errors.postcode }}</div>
            </div>
          </div>
          
          <div class="mb-3">
            <label for="mobile" class="form-label">Mobile Number*</label>
            <input 
              type="text" 
              class="form-control" 
              id="mobile" 
              name="mobile" 
              v-model="form.mobile"
              :class="{'is-invalid': errors.mobile}"
              required
            >
            <div class="invalid-feedback">{{ errors.mobile }}</div>
          </div>
        </fieldset>
        
        <!-- Job Preferences -->
        <fieldset class="mt-4">
          <legend>Job Preferences</legend>
          
          <div class="mb-3">
            <label for="jobCategory" class="form-label">Preferred Job Category*</label>
            <select 
              class="form-select" 
              id="jobCategory" 
              name="jobCategory" 
              v-model="form.jobCategory"
              :class="{'is-invalid': errors.jobCategory}"
              required
            >
              <option value="">Select a category</option>
              <option>AI</option>
              <option>Data Science</option>
              <option>Web Development</option>
              <option>Software Development</option>
              <option>DevOps</option>
              <option>Cybersecurity</option>
            </select>
            <div class="invalid-feedback">{{ errors.jobCategory }}</div>
          </div>
        </fieldset>
        
        <!-- Terms and Conditions -->
        <div class="mt-4">
          <button type="button" class="btn btn-outline-primary mb-3" @click="showTerms = !showTerms">
            {{ showTerms ? 'Hide' : 'Show' }} Terms and Conditions
          </button>
          
          <div v-if="showTerms" class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">Terms and Conditions</h5>
              <p class="card-text">
                By submitting this application, you agree to our terms and conditions.
                These include consent to process your personal information for recruitment purposes,
                verification of your information, and communication regarding job opportunities.
                All information provided must be accurate and complete.
              </p>
            </div>
          </div>
        </div>
        
        <div class="mt-3">
          <button type="submit" class="btn btn-primary">Submit Application</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ApplicationForm',
    data() {
      return {
        showTerms: false,
        form: {
          firstName: '',
          lastName: '',
          username: '',
          password: '',
          confirmPassword: '',
          email: '',
          street: '',
          suburb: '',
          postcode: '',
          mobile: '',
          dob: '',
          jobCategory: ''
        },
        errors: {
          firstName: '',
          lastName: '',
          username: '',
          password: '',
          confirmPassword: '',
          email: '',
          street: '',
          suburb: '',
          postcode: '',
          mobile: '',
          dob: '',
          jobCategory: ''
        }
      }
    },
    methods: {
      validateForm(e) {
        // Reset all errors
        for (let field in this.errors) {
          this.errors[field] = ''
        }
        
        let isValid = true
        
        // First Name validation
        if (!/^[a-zA-Z]+$/.test(this.form.firstName)) {
          this.errors.firstName = 'First name must contain only letters'
          isValid = false
        }
        
        // Last Name validation
        if (!/^[a-zA-Z]+$/.test(this.form.lastName)) {
          this.errors.lastName = 'Last name must contain only letters'
          isValid = false
        }
        
        // Username validation
        if (this.form.username.length < 3) {
          this.errors.username = 'Username must be at least 3 characters'
          isValid = false
        }
        
        // Password validation
        if (this.form.password.length < 8) {
          this.errors.password = 'Password must be at least 8 characters'
          isValid = false
        }
        
        if (!/[$%^&*]/.test(this.form.password)) {
          this.errors.password = 'Password must include at least one special character ($, %, ^, &, *)'
          isValid = false
        }
        
        // Confirm password validation
        if (this.form.password !== this.form.confirmPassword) {
          this.errors.confirmPassword = 'Passwords do not match'
          isValid = false
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(this.form.email)) {
          this.errors.email = 'Please enter a valid email address'
          isValid = false
        }
        
        // Street address validation
        if (this.form.street && this.form.street.length > 40) {
          this.errors.street = 'Street address cannot exceed 40 characters'
          isValid = false
        }
        
        // Suburb validation
        if (this.form.suburb && this.form.suburb.length > 20) {
          this.errors.suburb = 'Suburb cannot exceed 20 characters'
          isValid = false
        }
        
        // Postcode validation
        if (!/^\d{4}$/.test(this.form.postcode)) {
          this.errors.postcode = 'Postcode must be exactly 4 digits'
          isValid = false
        }
        
        // Mobile number validation
        if (!/^04\d{8}$/.test(this.form.mobile)) {
          this.errors.mobile = 'Mobile number must be exactly 10 digits and start with 04'
          isValid = false
        }
        
        // Date of birth validation
        if (this.form.dob) {
          const today = new Date()
          const birthDate = new Date(this.form.dob)
          let age = today.getFullYear() - birthDate.getFullYear()
          const m = today.getMonth() - birthDate.getMonth()
          
          if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--
          }
          
          if (age < 16) {
            this.errors.dob = 'You must be at least 16 years old'
            isValid = false
          }
        } else {
          this.errors.dob = 'Date of birth is required'
          isValid = false
        }
        
        // Job category validation
        if (!this.form.jobCategory) {
          this.errors.jobCategory = 'Please select a job category'
          isValid = false
        }
        
        if (!isValid) {
          e.preventDefault()
        }
      }
    }
  }
  </script>