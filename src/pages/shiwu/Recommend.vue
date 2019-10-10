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
    },
}
</script>

<style>

</style>