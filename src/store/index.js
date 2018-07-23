import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import project from './project'
import blog from './blog'
import user from './user'
import smallgroup from './smallgroup'
import notification from './notification'
import attendance from './attendance'
import classyear from './classyear'

Vue.use(Vuex)

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  modules: {
    auth,
    project,
    blog,
    user,
    smallgroup,
    notification,
    attendance,
    classyear
  }
})
