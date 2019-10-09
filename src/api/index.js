import ajax from './ajax'

export function reqHomeData() {
    return ajax({
        url:'/homedata'
    })
}

export function reqCategoryList(){
    return ajax.get('/categorylist')
}