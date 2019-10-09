import Mock from 'mockjs'
import homeData from './homeData.json'

// 商品导航
Mock.mock(/api\/homedata/,{status:0,data:homeData})