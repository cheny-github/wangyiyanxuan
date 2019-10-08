import ajax from './ajax'

export function reqHomeData() {
    return ajax({
        url:'/homedata'
    })
}