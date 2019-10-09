import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import home from './modules/home'
import category from './modules/category'

 export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        home,
        category        
    }
})