const state = {
  messages: [],

}

const mutations = {

  setMessages (state, messages) {
    state.messages = messages
  },

}

const actions = {

  removeLastMessage({ dispatch, state }) {
    
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}