import api from '@/services/api'
import axios from 'axios'

const url = 'https://app.fakejson.com/q'

const payloadProject = {
  token: '-WodxFsKjdPXsAJ5vTWTYw',
  data: {
    projectId: 'cryptoUUID',
    name: 'companyName',
    isActive: 'numberBool',
    createdAt: 'date|UNIX',
    baseURL: 'internetDomain',
    domain: 'internetUrl',
    _repeat: 5
  }
}

const fetchProjects = () => api.post(url, payloadProject)

export {
  fetchProjects
}