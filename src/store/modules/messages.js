import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import { fetchMessages } from '@/services/messages.js'

const state = {
  allMessages: [],

}

const mutations = {

  setAllMessages (state, messages) {
    state.allMessages = messages
  },

  addMessage (state, message) {
    state.allMessages.push(
      {
        messageId: uuidv4(),
        projectId: message.projectId,
        conversationId: 0,
        messageText: message.messageText,
        messageType: message.messageType,
        dateTime: moment(),
        status: 'new'
      }
    )
  },

  removeMessage(state, messageId) {
    state.allMessages.splice(
      state.messages.findIndex(
        obj => obj.id === messageId
      ),
      1)
  }

}

const actions = {

  removeMessage({ commit, state }, messageId) {
    commit('removeMessage', messageId)
  },

  addMessage({commit, state}, message) {
    commit('addMessage', message)
  },

  async fetchMessages({state, commit}) {
    try {
      const response = await fetchMessages()
      // const response = allProjects
      if (response) {
        commit('setAllMessages', response)
        return response
      }
    }
    catch (error) {
      console.log(error)
      throw error
    }
  },
}

const getters = {

  getLastMessagesByProjectId: (state) => (projectId) => {
    return state.allMessages.filter(message => 
      (message.status === 'new' && message.projectId === projectId)
    )
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}