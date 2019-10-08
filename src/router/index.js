import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/Home'
import Cart from 'pages/cart/Cart'
import Category from 'pages/category/Category'
import Profile from 'pages/profile/Profile'
import Recommend from 'pages/recommend/Recommend'
Vue.use(Router)


export default new Router(
    {
        mode:"history",
        routes:[
            {
                path:'/',
                component:Home
            },
            {
                path:'/cart',
                component:Cart
            },
            {
                path:'/category',
                component:Category
            },
            {
                path:'/profile',
                component:Profile
            },
            {
                path:'/recommend',
                component:Recommend
            },
                          
        ]
    }
)