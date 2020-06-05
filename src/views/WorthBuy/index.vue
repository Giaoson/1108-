<template>
  <div class="wrap-worth">
    <div class='top'>
      <div class="swipe-title">
        <img src="../../assets/topic_logo.c2284970.png"
             alt=""
             class='topic-logo'>
        <span class="desc">严选好物 用心生活</span>
        <img src="../../assets/topic_title_bg.2373a140.png"
             alt=""
             class='topic-title'>
      </div>
      <div class="swipe">
        <van-swipe :loop="false"
                   v-if='navdata'>
          <van-swipe-item>
            <van-grid :column-num="4">
              <van-grid-item v-for="value in navdata"
                             :key="value.id"
                             icon="photo-o"
                             text="文字">
                <van-image :src="value.picUrl" />
                <p>{{value.mainTitle}}</p>
              </van-grid-item>
            </van-grid>
          </van-swipe-item>
          <van-swipe-item>
            <van-grid :column-num="4">
              <van-grid-item v-for="value in navdata.slice(8,16)"
                             :key="value.id"
                             icon="photo-o"
                             text="文字">
                <van-image :src="value.picUrl" />
                <p>{{value.mainTitle}}</p>
              </van-grid-item>
            </van-grid>
          </van-swipe-item>
          <van-swipe-item>
            <van-grid :column-num="4">
              <van-grid-item v-for="value in navdata.slice(16)"
                             :key="value.id"
                             icon="photo-o"
                             text="文字">
                <van-image :src="value.picUrl" />
                <p>{{value.mainTitle}}</p>
              </van-grid-item>
            </van-grid>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="bottom">
      <!-- 下拉刷新模块 -->
      <!--    <van-pull-refresh v-model="refreshing"
                        @refresh="onRefresh"
                        offset="300"
                        loosing-text> -->

      <van-list v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad">
        <div class="box-wrapper">

          <div v-for="item in falls2data"
               :key="item.id">
            <!-- <div v-for="item1 in item.look"
                 :key="item1.topicId"
                 class='falls'> -->
            <div class='falls'>
              <img :src="item.picUrl"
                   alt=""
                   :style="{height:item.height}" />
              <span class="comment">{{item.content}}</span>
              <div class='articleInfo'>
                <div>
                  <img :src="item.avatar"
                       alt=""
                       class="logo">
                  <span class="author">{{item.nickname}}</span>
                </div>

                <div>

                  <img src="data:image/png;base64,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"
                       alt=""
                       class='icon'>
                  <span class="count">{{item.readCount}}k</span>
                </div>

              </div>
            </div>
            <!-- <p v-for='i in list' :key='i'>{{i}}</p> -->
            <!-- </div> -->
          </div>

        </div>
      </van-list>
      <!-- </van-pull-refresh> -->
      <div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from "vue";
import { List, PullRefresh } from "vant";
Vue.use(List);
Vue.use(PullRefresh);
import {
  getWorthBuyNav,
  getWorthBuyFalls1,
  getWorthBuyFalls2
} from "../../api";
export default Vue.extend({
  props: {},
  data() {
    return {
      navdata: "",
      falls1data: "",
      falls2data: [],
      list: [],
      list1: [],
      page: 1,
      loading: false,
      finished: false,
      refreshing: false
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.getdatas();
  },
  watch: {},
  methods: {
    async getdatas() {
      const resultnav = await getWorthBuyNav();
      this.navdata = resultnav.data.navList;
      const resultfalls1 = await getWorthBuyFalls1();
      this.falls1data = resultfalls1.data;
      // console.log(this.navdata);
      const resultfalls2 = await getWorthBuyFalls2(this.page);
      this.list1 = resultfalls2.data.result;
      for (let j = 0; j < 4; j++) {
        this.falls2data.push(this.list1[j].look);
      }
      console.log("falls2data", this.falls2data);
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }
        this.page++;
        this.getdatas();

        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      setTimeout(() => {
        // 清空列表数据
        this.finished = false;

        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        this.page++;
        console.log("page", this.page);
        this.getdatas();
        this.loading = true;

        this.onLoad();
      }, 1000);
    }
  },
  components: {}
});
</script>

<style scoped lang="less">
.top {
  padding-top: 1.3rem;
  background: #eee;
  position: relative;
  // margin: 0 auto;
  .swipe-title {
    // position: relative;
    // width: 100%;
    .desc {
      // display: inline-block;
      position: absolute;
      left: 2rem;
      line-height: 2.5rem;
      // vertical-align: middle;
      color: white;
    }
    .topic-logo {
      position: absolute;
      left: 0.3rem;
      top: 2rem;
    }
    .topic-title {
    }
  }

  .swipe {
    // width: 100%;
    background: #fff;
    height: 5.4rem;
    border-radius: 0.16rem;
    position: absolute;
    top: 3rem;
    left: 0;
    right: 0;
    bottom: 0;
    width: 9rem;
    margin: 0 auto;
    // left:1rem;

    // width: 20000px;
    // height: 12.84rem;

    // padding-top: 1.08rem;
    .van-swipe {
      background: white;
      // width: 100%;
      height: 620px;
      border-radius: 0.1rem;
      // overflow: hidden;
      margin-right: 0.1rem;
      .van-swipe__track {
        // width: 1125.6px;
        .van-swipe-item {
          // width: 1125.6px;
          .van-grid {
            // width: 1125.6px;
            .van-grid-item {
              // width: 200px;
              height: 300px;
              .van-image {
                width: 180px;
                height: 180px;
              }
              p {
                font-size: 0.3rem;
              }
            }
          }
        }
      }
    }
  }
}
.bottom {
  padding-top: 1rem;
  margin: 0 0.5rem;
  .box {
    height: 123px;
    padding: 1em;
    margin-top: 1em;
    // -moz-page-break-inside: avoid;
    -webkit-column-break-inside: avoid;
    break-inside: avoid;
    border: 1px solid #000;
    background: #909090;
  }
  .spe {
    height: 225px;
  }
  .box-wrapper {
    columns: 2;
    column-gap: 1rem;
    > div {
      // width: 500px;
      // overflow: hidden;
      .falls {
        // position: relative;
        // margin-top:.8rem;
        // overflow: hidden;
        // padding-top:1rem;

        width: 500px;
        padding: 0.3rem 0;
        img {
          width: 500px;
          border-radius: 0.1rem;
        }
        .comment {
          display: inline-block;
          overflow: hidden;
          font-size: 0.28rem;
          white-space: nowrap;
          width: 3.43rem;
          text-overflow: ellipsis;
          // padding: 0.18rem 0.16rem 0;
          color: #333;
          // line-height: 0.4rem;
          // position: absolute;
        }
        .articleInfo {
          display: flex;
          height: 0.3rem;
          justify-content: space-between;
          .logo {
            width: 0.5rem;
            height: 0.5rem;
          }
          .icon {
            width: 0.5rem;
            height: 0.5rem;
          }
          .count {
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 0.28rem;
          }
        }
      }
    }
  }
}
</style>
