//import uuidv4 from 'uuid/v4'
import { v4 as uuidv4 } from 'uuid'
import { fetchUsers } from '@/services/users.js'



const state = {
  allUsers: [],
  currentUser: {
    userId: '0002',
    name: 'Lara Zingaretti',
    username: 'lzingaretti',
    teamId:'0001'
  },
}

const mutations = {

  setAllUsers (state, allUsers) {
    state.allUsers = allUsers
  },

  addUser (state, user) {

    state.allUsers.push(
      {
        userId: uuidv4(),
        name: user.name,
        username: user.username,
        teamId: user.teamId
      }
    )
  },

  editUser(state, user) {
    const index = state.allUsers.map(o => o.userId).indexOf(user.projectId)
    state.allUsers.splice(index, 1, user)
  },
  
  removeUserById(state, userId) {
    state.allUsers.splice(
      state.allUsers.findIndex(
        obj => obj.userId === userId
      ), 1)
  },

}

const actions = {

  editUser({ commit, state }, user) {
    commit('editUser', user)
  },
  
  removeUserById({ commit, state }, userId) {
    commit('removeUserById', userId)
  },

  addUser({commit, state}, user) {
    commit('addUser', user)
  },

  setUsers({ commit, state }) {
    commit('setUsers')
  },

  async fetchUsers({state, commit}) {
    try {
      const response = await fetchUsers()
      // const response = allProjects
      if (response) {
        await commit('setAllUsers', response)
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

  getUserById: (state) => (userId) => {
    return state.allUsers.find(user => user.userId === userId)
  },


  getCurrentUser(state) {
    return state.currentUser
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}