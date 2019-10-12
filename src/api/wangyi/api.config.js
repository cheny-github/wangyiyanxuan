export default {
    reqTabs:{
        url:'/topic/v1/find/getTabs.json',
    },
    reqRecommendData:{
        url:'/topic/v1/find/recManual.json',
    },
    // reqAutoRecommendData(page, size)
    reqAutoRecommendData:{
        url:'/topic/v1/find/recAuto.json',
        defaultParams:{
            exceptIds:'6409,6201,6408,6410,6490,6488,5821,5716,5711,5641,3583,6383,6242,4513,5950,4035,5823,5867,6458,2876,5714,5712,5868,3438,4648,4001,3334,5942,518,5578,4024,4061,3629,3383'
        }
    },
    // 识物-推荐数据 上拉加载 
    // http://m.you.163.com/topic/v1/look/getList.json?id=9&size=2&type=1|2|3
    // 请求示例 ：reqList({page=1,size:2,type:1})
    reqList:{
        url:'/topic/v1/look/getList.json',
    },
    // reqCollection({id})
    reqCollection:{
        url:'/topic/v1/look/getCollection.json'
    },
    // reqSearch({keywordPrefix:xxx})
    reqSearch:{
        url:'/xhr/search/searchAutoComplete.json',
        method:'post',
        isForm:true
    },
    // reqInitSearch()
    reqInitSearch:{
        url:'/xhr/search/init.json',
        method:'post'
    }
}


// 识物-推荐数据 上拉加载 ---- http://m.you.163.com/topic/v1/find/recAuto.json
// export const reqAutoRecommendData = (page, size, exceptIds = '6409,6201,6408,6410,6490,6488,5821,5716,5711,5641,3583,6383,6242,4513,5950,4035,5823,5867,6458,2876,5714,5712,5868,3438,4648,4001,3334,5942,518,5578,4024,4061,3629,3383') => ajax(`/topic/v1/find/recAuto.json`, {page, size, exceptIds})


// // 识物-晒单 评价数据 ---- http://m.you.163.com/topic/v1/look/getList.json?id=9&size=2&type=1|2|3
// export const reqList = (page, size, type) => ajax(`${prefix}/topic/v1/look/getList.json`, {page, size, type})


// // 识物-晒单 萌宠 ---- http://m.you.163.com/topic/v1/look/getCollection.json?id=6
// export const reqColection = (id) => ajax(`${prefix}/topic/v1/look/getCollection.json`, {id})