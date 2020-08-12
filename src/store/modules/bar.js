const state = {
  foo: 'bar'

}

const mutations = {
  
  UPDATE_FOO (state, payload) {
    state.foo = payload
  },

}

const getters = {

  foo: (state) => { state.foo }

}

const actions = {

  setFoo({ commit }, payload) {
    commit('UPDATE_FOO', payload)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}