const state = {
  images: [],

}

const mutations = {

  setImages (state) {
    const images = []
    for (let index = 0; index < 2; index++) {
      images.push({
        id: '_' + Math.random().toString(36).substr(2, 9),
        url: 'https://source.unsplash.com/200x200/',
        messages: []
      })
    }
    state.images = images
  },

  addImage (state, image) {
  },

  removeImage(state, idImage) {

  }

}

const actions = {

  removeImage({ commit, state }, idImage) {
    commit('removeImage', idImage)
  },

  addImage({commit, state}, image) {
    commit('addImage', image)
  },

  addMessageToImage({commit, state}, payload) {

  },

  setImages({ commit, state }) {
    commit('setImages')
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}