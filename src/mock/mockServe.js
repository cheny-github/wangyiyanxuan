import Mock from 'mockjs'
import homeData from './homeData.json'
import category from './category.json'
// 商品导航
Mock.mock(/api\/homedata/,{status:0,data:homeData})
Mock.mock(/api\/categorylist/,{status:0,data:category})
