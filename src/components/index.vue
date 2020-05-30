<template>
  <div>
    <!-- 头部搜索栏 -->
    <header class="header">
      <span class="logo"></span>
      <div class="serchInput">
        <i class="icon"></i>
        <span class="placeholder">搜索商品, 共28156款好物</span>
      </div>
      <button>登录</button>
    </header>
    <!-- 导航栏 -->
    <nav>
      <van-tabs v-model="active">
        <van-tab title="推荐">内容 1</van-tab>
        <van-tab title="居家生活">内容 2</van-tab>
        <van-tab title="服饰鞋包">内容 3</van-tab>
        <van-tab title="美食酒水">内容 4</van-tab>
        <van-tab title="个护清洁">内容 1</van-tab>
        <van-tab title="母婴亲子">内容 2</van-tab>
        <van-tab title="运动旅行">内容 3</van-tab>
        <van-tab title="数码家电">内容 4</van-tab>
        <van-tab title="严选全球">内容 4</van-tab>
      </van-tabs>
    </nav>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <ul>
      <span>网易自营品牌</span>
      <span>30天无忧退货</span>
      <span>48小时快速退款</span>
    </ul>
    <!-- 10宫格 -->
    <van-grid :column-num="5">
      <van-grid-item
        v-for="value in 10"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <!-- 图片 -->
    <img src="###" alt="" />
    <!-- 图片 -->
    <a href="">
      <img src="" alt="" />
    </a>
    <!-- 3宫格 -->
    <van-grid :colum-num="3">
      <van-grid-item v-for="value in 3" :key="value" icon="photo-o" text="文字">
      </van-grid-item>
    </van-grid>
    <!-- 新人专享 -->
    <div>
      <h4>新人专享礼</h4>
      <div class="left">
        <img src="" alt="" />
      </div>
      <div class="right">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
    <!-- 类目热销榜 -->
    <div class="sale-hot">
      <h4>类目热销榜</h4>
      <div class="head">
        <div class="left">
          <img src="" alt="" />
        </div>
        <div class="right">
          <img src="" alt="" />
        </div>
      </div>
      <div class="content">
        <van-grid :colum-num="4">
          <van-grid-item
            v-for="value in 8"
            :key="value"
            icon="photo-o"
            text="文字"
          >
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <!-- 人气推荐 -->
    <div class="commend">
      <delete>人气推荐</delete>
      <p>更多></p>
      <img src="" alt="" />
      <van-grid :colum-num="3">
        <van-grid-item
          v-for="value in 3"
          :key="value"
          icon="photo-o"
          text="文字"
        >
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 限时购 -->
    <div class="time-shop">
      <h4>限时购</h4>
      <p>更多></p>
      <van-grid :colum-num="3">
        <van-grid-item
          v-for="value in 6"
          :key="value"
          icon="photo-o"
          text="文字"
        >
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 新品首发 -->
    <div class="new-goods">
      <h4>新品首发</h4>
      <p>更多</p>
      <van-grid :colum-num="3">
        <van-grid-item
          v-for="value in 6"
          :key="value"
          icon="photo-o"
          text="文字"
        >
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 活动 -->
    <div>
      <div class="left">
        <p>3件3折</p>
        <p>同价618</p>
      </div>
      <div class="right">
        <p>预售盛典</p>
        <p>9.9抵99</p>
      </div>
    </div>
    <!-- foot -->
    <div class="foot">
      <button>下载APP</button>
      <button>电脑版</button>
      <p>网易公司版权所有@1997-20220</p>
      <p>食品经营许可证：JY13301080111719</p>
    </div>
    <van-tabbar v-model="active1">
      <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item icon="bars">分类</van-tabbar-item>
      <van-tabbar-item icon="good-job">值得买</van-tabbar-item>
      <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"
        >个人</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
import Vue from 'vue'
import {
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Button,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
} from 'vant'
import { Field } from 'vant'

Vue.use(Field)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Tabbar)
Vue.use(Button)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)
export default {
  name: 'Footer',
  data() {
    return {
      value: '',
      active: 0,
      active1: 2,
      autosize: { maxHeight: 100, minHeight: 50 },
    }
  },
}
</script>
<style lang="less">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.header {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  padding: 0.21333rem 0.4rem;
  background-image: url('?quality=75&type=webp&imageView&thumbnail=343x220');
  background-size: 100% 100%;
  .logo {
    width: 20%;
    height: 0.5333333rem;
    /* line-height: .5333333rem; */
    background-position: center;
    // background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp);
    background-image: url('https://yanxuan-item.nosdn.127.net/da0321f5813855f287c274e1d8a7cf9f.png?quality=75&type=webp&imageView&thumbnail=200x200');
    background-size: cover;
    display: inline-block;
    margin-right: 0.266667rem;
  }
  .serchInput {
    display: inline-block;
    width: 60%;
    height: 0.74667rem;
    line-height: 0.74667rem;
    background-color: #ededed;
    border-radius: 0.10667rem;
    .icon {
      width: 30px;
      height: 30px;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp);
      background-position: center;
      background-size: cover;
      display: inline-block;
      margin-right: 10px;
    }
    .placeholder {
      font-size: 30px;
      color: gray;
      text-decoration: line-through;
    }
  }
  button {
    // width: 15%;
    height: 0.54667rem;
    text-align: center;
    line-height: 0.54667rem;
    background: white;
    color: red;
    border: solid red 1px;
    margin-left: 20px;
    border-radius: 0.10667rem;
  }
}
</style>
