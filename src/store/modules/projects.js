//import uuidv4 from 'uuid/v4'
import { v4 as uuidv4 } from 'uuid'
import { fetchProjects } from '@/services/projects.js'


const state = {
  allProjects: [],

  currentProject: {
    projectId: '7b73851c-1a5b-4766-8699-419db023f140',
    domain: 'canva.com',
    baseUrl: 'https://www.canva.com/design/DAD-yhsn0Iw/kAGn3K2rIoa5knOGZvz6DA/view',
    isActive: true,
    createdAt: '2020-07-07T07:22Z',
    name: 'Proyecto de Prueba_2',
    ownerId:'0002'
  },
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
        obj => obj.projectId === projectId
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
      // const response = allProjects
      if (response) {
        commit('setAllProjects', response)
        return response
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
  },

  getActiveProjectsByUserId: (state) => (userId) => {
    return state.allProjects.filter(project => 
      (project.isActive && 
       project.ownerId === userId &&
       project.projectId !== state.currentProject.projectId)
    )
  },

  getCurrentProject(state) {
    return state.currentProject
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}