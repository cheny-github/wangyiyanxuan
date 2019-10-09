import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/Home'
import Cart from 'pages/cart/Cart'
import Category from 'pages/category/Category'
import Profile from 'pages/profile/Profile'
import Shiwu from 'pages/shiwu/Shiwu'
import Recommend from 'pages/shiwu/Recommend'
import GoodsNeiBuJia from 'pages/shiwu/GoodsNeiBuJia'
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
                path:'/shiwu',
                component:Shiwu,
                children:[
                    {
                        path:'',
                        redirect:'recommend'
                    },
                    {
                        path:'recommend',
                        component:Recommend
                    },
                    {
                        path:'goodsneibujia',
                        component:GoodsNeiBuJia
                    },
                ]
            },
                          
        ]
    }
)