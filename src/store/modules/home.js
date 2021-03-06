import api from '../../api'

const HOME_DATA = 'update homeData'

const state={
    homeData:{ }
}
const getters={

}
const mutations={
    [HOME_DATA](state,homeData){
        state.homeData=homeData
    }
}

const actions={
    async fetchHomeData({commit}){
        const result = await api.service.reqHomeData()
        if (result.status ===0) {
            commit(HOME_DATA,result.data)
        }
    }

}


export default {
    state,
    getters,
    mutations,
    actions
}