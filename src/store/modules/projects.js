//import uuidv4 from 'uuid/v4'
import { v4 as uuidv4 } from 'uuid'
import { fetchProjects } from '@/services/projects.js'

const state = {
  allProjects: [
    {
      projectId: uuidv4(),
      domain: 'canva.com',
      baseUrl: 'https://www.canva.com/design/DAEAlKQv4Ps/7qkTQuHS5OiJ-J1CgJZYng/view',
      isActive: true,
      createdAt: Date.now(),
      name: 'Proyecto de Prueba'
    }
  ],
  /*
   {
     projectId: '',
     domain: '',
     baseUrl: '',
     isActive: '',
     created: ''

  }*/

}

const mutations = {

  setAllProjects (state, allProjects) {
    state.allProjects = allProjects
  },

  addProject (state, project) {

    state.allProjects.push(
      {
        projectId: uuidv4(),
        domain: project.domain,
        baseUrl: project.baseUrl,
        isActive: project.isActive,
        created: Date.now()
      }
    )
  },

  editProject(state, project) {
    const index = state.allProjects.map(o => o.projectId).indexOf(project.projectId)
    state.allProjects.splice(index, 1, project)
  },
  
  removeProjectById(state, projectId) {
    state.allProjects.splice(
      state.allProjects.findIndex(
        obj => obj.id === projectId
      ), 1)
  },

  removeProjectByUrl(state, projectUrl) {
    state.allProjects.splice(
      state.allProjects.findIndex(
        obj => obj.baseUrl === projectUrl
      ), 1)
  }

}

const actions = {

  editProject({ commit, state }, project) {
    commit('editProject', project)
  },
  
  removeProjectById({ commit, state }, projectId) {
    commit('removeProjectById', projectId)
  },

  removeProjectByUrl({ commit, state }, projectUrl) {
    commit('removeProjectByUrl', projectUrl)
  },

  addProject({commit, state}, project) {
    commit('addProject', project)
  },

  setProjects({ commit, state }) {
    commit('setProjects')
  },

  async fetchProjects({state, commit}) {
    try {
      const response = await fetchProjects()
      if (response.data) {
        console.log(response.data)
        commit('setAllProjects', response.data)
        return response.data
      }
    }
    catch (error) {
      console.log(error)
      throw error
    }
  }

}

const getters = {

  getActiveProjects(state) {
    return state.allProjects.filter(project => project.isActive)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}