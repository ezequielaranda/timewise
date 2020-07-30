const state = {
  messages: [],

}

const mutations = {

  setMessages (state, messages) {
    state.messages = messages
  },

  addMessage (state, message) {
    state.message.push(
      {
        id: '_' + Math.random().toString(36).substr(2, 9),
        text: message,
        viewed: false
      }
    )
  }

}

const actions = {

  removeLastMessage({ dispatch, state }) {

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