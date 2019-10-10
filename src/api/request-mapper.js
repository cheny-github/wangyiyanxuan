
export default (apiConfig,axiosInstance)=>{
    return Object.keys(apiConfig).reduce((pre,key)=>{
        let {url,method ='get',corsUrl,isForm=false,withToken=false} = apiConfig[key]
        method = method.toLowerCase()
        if (corsUrl) {
            url+= corsUrl
        }
        pre[key]=async (data={},config={})=>{
            // 合并配置
            let options ={url ,method,headers:{withToken}}
            if (method === "get" || method === "delte" ) {
                options={...options,...{params:data },...config}
            }else{
                options ={...options,data,...config}
                if (isForm) {
                    options.transformRequest=[function (data) {
                        const fd = new FormData()
                        // Do whatever you want to transform the data
                        for (const key in data) {
                            if (data.hasOwnProperty(key)) {
                                const element = data[key];
                                fd.append(key,element)
                            }
                        }
                        return fd;
                      }]
                }
            }
            // 发送请求
            try{
                 const result = await axiosInstance(options)
                 config.onSuccess && config.onSuccess(result)
                 return result
            }catch(error){
                config.onError && config.onError(error)
                return new Promise(()=>{})
            }
        }
        return pre
    },{})
}

