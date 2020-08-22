import uuidv4 from 'uuid/v4'

const state = {
  allProjects: [],
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

  setAllProjects (state) {
    const allProjects = []
    // fill the array from API
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

  removeProjectById(state, idProject) {
    state.allProjects.splice(
      state.allProjects.findIndex(
        obj => obj.id === idProject
      ), 1)
  }

}

const actions = {

  removeProjectById({ commit, state }, idProject) {
    commit('removeProjectById', idProject)
  },

  addProject({commit, state}, project) {
    commit('addProject', project)
  },

  setProjects({ commit, state }) {
    commit('setProjects')
  },

}

const getters = {

  getActiveProjects({state}) {
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