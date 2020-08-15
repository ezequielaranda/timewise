import Vue from 'vue'
import Vuex from 'vuex'
import  messages from './modules/messages'
import  images from './modules/images'
import  bar from './modules/bar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    messages,
    images,
    bar
  },
})
