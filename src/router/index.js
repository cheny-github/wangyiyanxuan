import Vue from 'vue'
import Router from 'vue-router'
// import Home from 'pages/home/Home'
// import Cart from 'pages/cart/Cart'
// import Category from 'pages/category/Category'
// import Profile from 'pages/profile/Profile'
// import Shiwu from 'pages/shiwu/Shiwu'
// import Recommend from 'pages/shiwu/Recommend'
// import GoodsNeiBuJia from 'pages/shiwu/GoodsNeiBuJia'
// import Login from 'pages/profile/Login'
// import LoginBy from 'pages/profile/LoginBy'
Vue.use(Router)

/*
路由懒加载:
  1. 使用 import 函数: 被引入的模块单独打包(生成一个单独的打包文件)
  2. 配置的component是: 返回import()得到的模块的函数, 只有当请求对应的path, 才会执行此函数, 从后台获取对应的包
好处:
  减小首屏需要加载的js
 */
export default new Router(
    {
        mode:"history",
        routes:[
            {
                path:'/',
                component:()=>import('pages/home/Home')
            },
            {
                path:'/cart',
                component:()=>import('pages/cart/Cart')
            },
            {
                path:'/category',
                component:()=>import('pages/category/Category')
            },
            {
                path:'/profile',
                component:()=>import('pages/profile/Profile'),
                children:[
                    {
                        path:'',
                        redirect:'login'
                    },
                    {
                        path:'login',
                        component:()=>import('pages/profile/Login')
                    },
                    {
                        path:'loginby/:logway',
                        component:()=>import('pages/profile/LoginBy'),
                    }
                ]
            },
            {
                path:'/shiwu',
                component:()=>import('pages/shiwu/Shiwu'),
                children:[
                    {
                        path:'',
                        redirect:'recommend'
                    },
                    {
                        path:'recommend',
                        component:()=>import('pages/shiwu/Recommend')
                    },
                    {
                        path:'goodsneibujia',
                        component:()=>import('pages/shiwu/GoodsNeiBuJia')
                    },
                ]
            },
            {
                path:'/search',
                component:()=>import('pages/search/Search')
            }             
        ]
    }
)