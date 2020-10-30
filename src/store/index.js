import Vue from 'vue'
import Vuex from 'vuex'
import  messages from './modules/messages'
import  images from './modules/images'
import  projects from './modules/projects'
import  users from './modules/users'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    messages,
    images,
    projects,
    users
  },
})
