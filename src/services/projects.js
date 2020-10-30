import api from '@/services/api'
import axios from 'axios'
import { allProjects } from '@/services/data/projects.js'

const url = 'https://app.fakejson.com/q'

// const fetchProjects = () => api.post(url, payloadProject)

const fetchProjects = () => allProjects

export {
  fetchProjects
}