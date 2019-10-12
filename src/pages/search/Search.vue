<template>
  <div class="wrapper">
    <header class="header">
      <!--   搜索框 -->
      <div class="top">
        <div class="left">
          <i class="iconfont iconsousuo"></i>
          <input type="search" v-model="keywordPrefix" :placeholder="defaultKeyword"  />
        </div>
        <span class="right" @click="goback" >取消</span>
      </div>
      <!-- 历史记录 -->
      <div class="history-wrapper" v-show="!hasResult">
        <div class="top">
          <div class="text">历史记录</div>
          <!-- 删除历史记录 -->
          <i class="iconfont iconshanchu" @click="removeSearchHistory"></i>
        </div>
        <ul class="history-list">
          <li class="history-item" v-for="(item, index) in searchHistory" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="search-result" v-show="hasResult">
        <ul class="result-list">
          <li class="result-item" v-for="(searchResult, index) in resultList" 
          @click="goto(searchResult)"
          :key="index">{{searchResult}}</li>
        </ul>
      </div>
    </header>
    <div class="seprator" v-show="!hasResult"></div>
    <!-- 热门搜索 -->
    <div class="hot-wrapper" v-show="!hasResult">
      <div class="title">热门搜索</div>
      <ul class="hot-list">
        <li class="hot-item " 
        :class="{highlight:hotKeyword.highlight===1}"
        v-for="(hotKeyword, index) in hotKeywordVOList" :key="index">
            <a :href="hotKeyword.schemeUrl">{{hotKeyword.keyword}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import throttle from 'lodash/throttle'
import storeJS from 'store'
// 
import qs from 'qs';
export default {
  data() {
    return {
        // 查询结果集
        resultList:[],
        // 用户输入
        keywordPrefix:'',
        // 默认关键字
        defaultKeyword:'',
        defaultKeywords:[],
        // 热门关键字
        hotKeywordVOList:[],
        // 历史记录
        searchHistory:[]
    };
  },
  methods:{
      doSearch:throttle( async function(){
          const result=  await this.$api.wangyi.reqSearch({keywordPrefix:this.keywordPrefix})
          console.log(result);
          if (result.code == 200) {
              this.resultList = result.data
          }
      },800),
    //   跳转到搜索结果页面
      goto(keyword){
         //加入历史记录  
          this.searchHistory.push(keyword)
          storeJS.set('key_search_history',this.searchHistory)
        //  跳转
          let queryString = qs.stringify({keyword})
          window.location = `http://m.you.163.com/search?${queryString}&_stat_search=autoComplete`
      },
    //   回到之前页面
      goback(){
          
          this.$router.go(-1)
      },
    //   删除历史记录
    removeSearchHistory(){
        this.searchHistory = []
        storeJS.set('key_search_history',this.searchHistory)
    }
  },

  computed:{
      hasResult(){
          return this.resultList.length || this.keywordPrefix
      }
  },
  watch:{
      keywordPrefix(value){
          if (!value) {
              this.resultList = []
              return
          }
          this.doSearch()
      },

  },

  async mounted(){
      this.searchHistory = storeJS.get('key_search_history')
      const result =  await this.$api.wangyi.reqInitSearch()
      if (result.code ==200) {
        this.defaultKeyword = result.data.defaultKeyword.keyword
        this.defaultKeywords = result.data.defaultKeywords
        this.hotKeywordVOList = result.data.hotKeywordVOList
      }
  },
  beforeCreate() {
    this.$bus.$emit("showFooter", false);
  },
  destroyed() {
    this.$bus.$emit("showFooter", true);
  }
};
</script>

<style lang="less" scoped>
// 搜索结果
.search-result {
  .result-list {
    .result-item {
      height: 45px;
      line-height: 45px;
      box-sizing: border-box;
      border-bottom: 1px solid #eaeaea;
    }
  }
}

// 热门搜索
.hot-wrapper {
  background-color: #fff;
  padding: 16px;
  .title {
    font-size: 15px;
    color: #9d9d9d;
  }
  .hot-list {
    margin-top: 14px;
    display: flex;
    flex-wrap: wrap;
    .hot-item {
        
      height: 24px;
      padding: 0 8px;
      line-height: 24px;
      box-sizing: border-box;
      border-radius: 3px;
      border: 1px solid #d6d6d6;
      margin-right: 16px;
      margin-bottom: 16px;
      &.highlight {
          a{
        color: #b4282d;
          }

        border: 1px solid #b4282d;
      }
      a{
          display: block;
          color: #333;
          text-decoration: none;
      }
    }
  }
}

.seprator {
  height: 12px;
  width: 100vw;
  background-color: #eee;
}
.wrapper {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  //   头部
  .header {
    background-color: #fff;
    padding: 8px 15px 31px 15px;
    .top {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      align-items: center;
      margin-bottom: 24px;
      .left {
        display: flex;
        height: 28px;
        line-height: 28px;
        .iconsousuo {
          text-align: center;
          width: 33px;
          color: #949494;
          background-color: #f4f4f4;
        }
        input[type="search"] {
          width: 270px;
          border: none;
          background-color: #f4f4f4;
          outline: none;
        }
      }
    }
    .history-wrapper {
      .top {
        font-size: 14px;

        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        .iconshanchu {
          color: #666;
        }
        .text {
          font-weight: bold;
          color: #b5b5b5;
        }
      }
      .history-list {
        display: flex;
        flex-wrap: wrap;
        .history-item {
          padding: 6px 7px;
          border: 1px solid #d6d6d6;
          border-radius: 3px;
          margin-bottom: 10px;
          margin-right: 16px;
        }
      }
    }
  }
}
</style>