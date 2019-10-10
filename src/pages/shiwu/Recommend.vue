<template>
  <div>
      <div v-for="(item, index) in topicList" :key="index">
          <div v-for="(topic, i) in item.topics" :key="i">
            <CardLR  :topic="topic" v-if="topic.type ===2"></CardLR>
            <Card :topic="topic" v-if="topic.type === 0"></Card>
            <ListCard :topic="topic" v-if="topic.type ===7"></ListCard>
          </div>
      </div>
      
  </div>
</template>

<script>
import Card from './Card'
import CardLR from './CardLR'
import GoodsNeiBuJia from './GoodsNeiBuJia'
import ListCard from './ListCard'
import _ from 'lodash/function'


export default {
    components:{
        ListCard,
        Card,
        CardLR,
        GoodsNeiBuJia
    },
    data() {
        return {
            topicList:[]
        }
    },
    async mounted() {
        const result = await this.$api.wangyi.reqRecommendData()
        this.topicList = result.data
        // 上拉加载数据
        const handleScroll = _.debounce(async ev => {
            const scrollTop= document.documentElement.clientHeight +document.documentElement.scrollTop 
            const scrollHeight = document.documentElement.scrollHeight 
            if (scrollHeight -scrollTop <200) {
                // console.log('good')
               const result = await  this.$api.wangyi.reqAutoRecommendData({
                   page:1,
                   size:10
               })
                // 取出响应中的topic字段  
               const topics = result.data.result.reduce((pre,item)=>{
                     pre.push({topics:item.topics}) 
                     return pre
               },[])

               this.topicList.push(...topics)
            }
        },50)
        document.body.onscroll=handleScroll
    },
    beforeDestroy(){
        document.body.onscroll =null
    }
}
</script>

<style>

</style>