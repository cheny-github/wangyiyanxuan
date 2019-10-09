import {reqCategoryList} from '../../api/index'

const CATEGORY_LIST = 'category list'

const state={
    categoryList:[]
}
const getters={

}
const mutations={
    [CATEGORY_LIST](state,categoryList){
        state.categoryList=categoryList
    }
}

const actions={
    async fetchCategoryList({commit}){
        const result = await reqCategoryList()
        if (result.status ===0) {
            commit(CATEGORY_LIST,result.data)
        }
    }

}


export default {
    state,
    getters,
    mutations,
    actions
}