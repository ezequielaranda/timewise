//import uuidv4 from 'uuid/v4'
import { v4 as uuidv4 } from 'uuid'

const state = {
  allProjects: [
    {
      projectId: uuidv4(),
      domain: 'canva.com',
      baseUrl: 'https://www.canva.com/design/DAEAlKQv4Ps/7qkTQuHS5OiJ-J1CgJZYng/view',
      isActive: true,
      created: Date.now()
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

  removeProjectById(state, projectId) {
    state.allProjects.splice(
      state.allProjects.findIndex(
        obj => obj.id === projectId
      ), 1)
  }

}

const actions = {

  removeProjectById({ commit, state }, projectId) {
    commit('removeProjectById', projectId)
  },

  addProject({commit, state}, project) {
    commit('addProject', project)
  },

  setProjects({ commit, state }) {
    commit('setProjects')
  },

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