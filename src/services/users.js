import api from '@/services/api'
import axios from 'axios'
import { allUsers } from '@/services/data/users.js'

const url = 'https://app.fakejson.com/q'



// const fetchProjects = () => api.post(url, payloadProject)

const fetchUsers = () => allUsers

export {
  fetchUsers
}