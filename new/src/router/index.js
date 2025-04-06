import { createRouter, createWebHistory } from 'vue-router'
import JobList from '../components/JobList.vue'
import JobDetail from '../components/JobDetail.vue'
import JobOverview from '../components/JobOverview.vue'

const routes = [
  {
    path: '/',
    component: JobList,
    children: [
      {
        path: '',
        component: JobOverview,
        name: 'overview'
      },
      {
        path: 'job/:id',
        component: JobDetail,
        name: 'job-detail',
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router