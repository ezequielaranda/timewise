const state = {
  messages: [],

}

const mutations = {

  setMessages (state, messages) {
    state.messages = messages
  },

  addMessage (state, message) {
    state.messages.push(
      {
        id: '_' + Math.random().toString(36).substr(2, 9),
        text: message,
        viewed: false
      }
    )
  },

  removeMessage(state, idMessage) {
    state.messages.splice(
      state.messages.findIndex(
        obj => obj.id === idMessage
      ),
      1)
  }

}

const actions = {

  removeMessage({ commit, state }, idMessage) {
    commit('removeMessage', idMessage)
  },

  addMessage({commit, state}, message) {
    commit('addMessage', message)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}