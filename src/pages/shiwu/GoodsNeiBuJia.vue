<template>
  <div class="wrapper">
    <!-- 严选萌物 -->
    <div class="mengwu">
      <div class="title">让生活更好的n种方式</div>
      <div class="title2">可爱值Max的严选萌物</div>
      <div class="list-wrapper" ref="mengWuList">
        <ul class="mengwu-list">
          <li class="mengwu-item" v-for="(mengwu, index) in mengWuList" :key="index">
            <img
              data-v-414248e1
              :src="mengwu.banner.picUrl"
              data-src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg"
              lazy="loaded"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="seprator"></div>
    <!-- Ta的严选生活 -->
    <div class="yanxuanlife">
      <div class="title">Ta们的严选生活</div>
      <div class="tabs">
        <div class="zuixin tab" :class="{active:type===1}" @click="type=1">最新</div>
        <div class="zuire tab" :class="{active:type===2}" @click="type=2">本月最热</div>
        <div class="shaidanzuhe tab" :class="{active:type===3}" @click="type=3">晒单组合</div>
      </div>
      <!-- 内容 -->
      <div class="content">
        <ul class="list" ref="contentList">
          <li class="item" v-for="(comment, index) in commentList" :key="index">
            <img
              class="mian-img"
              data-v-7131983a
              :src="comment.bannerInfo.picUrl"
              alt="New"
              lazy="loaded"
            />
            <div class="desc" v-if="type !==3">{{comment.content}}</div>
            <div class="like" v-if="type !==3">
              <div class="avatar">
                <img data-v-7131983a :src="comment.avatar" alt="avatar" lazy="loaded" />
                <div class="username">{{comment.nickName}}</div>
              </div>
              <div class="count">
                <i class="iconfont icondianzan"></i>
                {{comment.supportNum}}
              </div>
            </div>
            <!-- 第三页 -->
            <div class="desc" v-if="type ===3" style="text-align:center;    line-height: 23px;">
              <div class="title" style="color:#333;">{{comment.collection.title}}</div>
              <div class="subtitle">{{comment.collection.subtitle}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import _ from "lodash/function";
export default {
  props:['setHeadActiveIndex'],
  data() {
    return {
      mengWuList: [],
      commentList: [],
      currentPage: 1,
      type: 1
    };
  },
  mounted() {
    const { reqCollection, reqList } = this.$api.wangyi;
    reqCollection({ id: 6 }).then(mengwuData => {
      this.mengWuList = mengwuData.data.lookList;
    });
    reqList({ page: 1, size: 10, type: 1 }).then(data => {
      this.commentList = data.data.topicList;
    });
    // 上拉加载数据
    const handleScroll = _.debounce(async ev => {
      const scrollTop =
        document.documentElement.clientHeight +
        document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      if (scrollHeight - scrollTop < 200) {
        // console.log('good')
        const result = await reqList({
          page: ++this.currentPage,
          size: 10,
          type: this.type
        });

        this.commentList.push(...result.data.topicList);
      }
    }, 50);
    document.body.onscroll = handleScroll;
  },
  beforeDestroy() {
    document.body.onscroll = null;
  },
  watch: {
    mengWuList() {
      this.$nextTick(() => {
        new BScroll(this.$refs.mengWuList, {
          scrollX: true,
          click: true
        });
      });
    },
    type() {
      this.reqList();
    }
  },
  methods: {
    reqList() {
      const { reqList } = this.$api.wangyi;
      reqList({ page: 1, size: 10, type: this.type }).then(data => {
        this.commentList = data.data.topicList;
      });
    }
  },
  beforeRouteEnter(to,from,next){
    next(component=>{
      component.setHeadActiveIndex(1)
    })
  }
};
</script>

<style lang="less" scoped>
.seprator {
  height: 10px;
  width: 100vw;
  background-color: #f7f7f7;
}
.wrapper {
  width: 100vw;
}
.list-wrapper {
  width: 100vw;
  display: flex;
}
// 萌物
.mengwu {
  margin-top: 20px;
  margin-bottom: 15px;
  display: flex;
  flex-flow: column;
  align-items: center;
  .title {
    font-size: 14px;
    color: #7f7f7f;
  }
  .title2 {
    margin-top: 22px;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .mengwu-list {
    display: flex;
    .mengwu-item {
      flex: none;
      width: 120px;
      height: 120px;
      img {
        height: 100%;
        width: 100%;
        border-radius: 10px;
      }
    }
  }
}

// 严选生活家
.yanxuanlife {
  display: flex;
  flex-flow: column;
  margin: 0 10px;
  margin-top: 22px;
  .title {
    font-size: 15px;
    font-weight: bold;
  }
  .tabs {
    display: flex;
    margin: 16px;
    justify-content: space-between;
    .tab {
      height: 25px;
      padding: 5px 15px;
      line-height: 25px;
      font-size: 15px;
      background-color: #f4f4f4;
      border-radius: 3px;
      &.active {
        color: #b0955f;
        background-color: #ffe4af;
        font-weight: bold;
      }
    }
  }
  .content {
    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item {
        border-radius: 8px;
        border: 1px solid #ccc;
        width: 174px;
        margin-bottom: 9px;
        .mian-img {
          width: 100%;
          border-radius: 8px 8px 0 0;
        }
        .desc {
          font-size: 12px;
          margin-bottom: 15px;
          color: #8a8a8a;
          text-indent: 1em;
          overflow: hidden;
          display: -webkit-box;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2; /*要显示的行数*/
          -webkit-box-orient: vertical;
        }
        .like {
          padding: 0 10px;
          padding-bottom: 3px;
          display: flex;
          justify-content: space-between;
          .avatar {
            display: flex;
            align-items: center;
            img {
              width: 25px;
              height: 25px;
              border-radius: 50%;
              margin-right: 10px;
            }
            .username {
              font-size: 12px;
              color: #aaa;
            }
          }
          .count {
            font-size: 11px;
            display: flex;
            align-items: center;
            .icondianzan {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>