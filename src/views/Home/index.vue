<template>
  <div class="home-wrap">
    <Header>
      <span slot="left" class='left'></span>
      <div slot="center" class='center'>
        <i class="icon"></i>
        <span class="placeholder">搜索商品, 共28156款好物</span>
      </div>
      <button slot="right" class='right'>登录</button>
    </Header>
    <nav>
      <van-tabs class="navbar" v-model="active">
        <!-- 给每个navbar添加对应的点击事件，该事件用于传递id -->
        <van-tab
          v-for="(nav, index) in navList"
          :key="index"
          :title="nav.name"
        ></van-tab>
      </van-tabs>
    </nav>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="(imgitem, index) in focusList"
        :key="imgitem.picUrl"
        ><img :src="imgitem.picUrl" alt="" @click="swipeTo(index)"
      /></van-swipe-item>
    </van-swipe>
    <div class="service">
      <!-- <span>网易自营品牌</span>
      <span>30天无忧退货</span>
      <span>48小时快速退款</span> -->
      <span v-for="(policy, index) in policyDescList" :key="index"
        ><img :src="policy.icon" />{{ policy.desc }}</span
      >
    </div>
    <!-- 5宫格 -->
    <van-grid :column-num="5" class="kingkong5" v-if="kingKongModule">
      <van-grid-item
        v-for="value in kingKongModule"
        :icon="value.picUrl"
        :text="value.text"
        :key="value.text"
        :url="value.schemeUrl"
        :style="{ color: '#' + value.textColor }"
      >
        <!-- <span>11</span> -->
      </van-grid-item>
    </van-grid>
    <!-- 图片 -->
    <img src="###" class="adver1" alt="" />
    <!-- 图片 -->
    <a href="" class="adver2">
      <img src="" alt="" />
    </a>
    <!-- 3宫格 -->
    <!-- <van-grid :colum-num="3"
              class="kingkong3">
      <van-grid-item v-for="value in 3"
                     :key="value"
                     icon="photo-o"
                     text="文字">
      </van-grid-item>
    </van-grid> -->
    <!-- 新人专享 -->
    <div class="newMember" v-if="indexActivityModule">
      <div class="title">
        <span class="title1">新人专享礼</span>
      </div>
      <div class="content">
        <div class="left">
          <!-- <div>111</div> -->
          <img :src="indexActivityModule[0].picUrl" alt="" />
          <span>{{ indexActivityModule[0].originPrice }}</span>
        </div>
        <div class="right">
          <!-- <div></div> -->
          <img :src="indexActivityModule[0].showPicUrl" alt="" />
          <img :src="indexActivityModule[0].picUrl" alt="" />
        </div>
      </div>
    </div>
    <!-- 类目热销榜 -->
    <div class="sale-hot" v-if="categoryHotSellModule">
      <div class="title">
        <span class="title1">类目热销榜</span>
      </div>
      <div class="head">
        <div class="left">
          <span>{{ categoryHotSellModule[0].categoryName }}</span>
          <img :src="categoryHotSellModule[0].picUrl" alt="" />
        </div>
        <div class="right">
          <span>{{ categoryHotSellModule[1].categoryName }}</span>
          <img :src="categoryHotSellModule[1].picUrl" alt="" />
        </div>
      </div>
      <div class="content">
        <van-grid :colum-num="4" class="kingkong4">
          <van-grid-item
            v-for="value in categoryHotSellModule.slice(2, 10)"
            :key="value.picUrl"
            :text="value.categoryName"
          >
            <van-image :src="value.picUrl" />
            <span>{{ value.categoryName }}</span>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <!-- 人气推荐 -->
    <div class="commend" v-if="popularItemList.length">
      <div class="title">
        <span class="title1">人气推荐</span>
        <span>更多></span>
      </div>
      <img src="" alt="" />
      <van-grid :colum-num="3" class="kingkong3">
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
      <div class="title">
        <div class="left">
          <span class="title1">限时购</span>
          <van-count-down :time="time">
            <template v-slot="timeData">
              <span class="block">{{ timeData.hours }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
        <span>更多></span>
      </div>
      <van-grid :colum-num="3" class="kingkong3" v-if="flashSaleModule">
        <!-- <van-grid-item v-for="value in flashSaleModule.itemList"
                       :key="value"
                       :icon="value.picUrl"
                       :text="'￥'+value.originPrice
                       + '\n' + 23">
        </van-grid-item> -->
        <van-grid-item
          v-for="(value, index) in flashSaleModule.itemList"
          :key="index"
        >
          <van-image :src="value.picUrl" />
          <span class="oldPrice">￥{{ value.originPrice }}</span>
          <span class="newPrice">￥{{ value.activityPrice }}</span>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 新品首发 -->
    <div class="new-goods" v-if="newItemList">
      <div class="title">
        <span class="title1">新品首发</span>
        <span>更多</span>
      </div>
      <van-grid :colum-num="3" class="kingkong3">
        <van-grid-item
          v-for="value in newItemList"
          :key="value.id"
          icon="photo-o"
          text="文字"
        >
          <van-image :src="value.scenePicUrl" />
          <span>{{ value.name }}</span>
          <span class="price"
            >￥{{ value.retailPrice }}/{{ value.pieceUnitDesc }}</span
          >
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 活动 -->
    <!-- <div>
      <div class="left">
        <p>3件3折</p>
        <p>同价618</p>
      </div>
      <div class="right">
        <p>预售盛典</p>
        <p>9.9抵99</p>
      </div>
    </div> -->
    <!-- Footer -->
    <div class="footer">
      <div class="top">
        <button>下载APP</button>
        <button>电脑版</button>
      </div>
      <div class="bottom">
        <p>网易公司版权所有@1997-20220</p>
        <p>食品经营许可证：JY13301080111719</p>
      </div>
    </div>
    <van-tabbar v-model="active1" route placeholder>
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="bars" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="good-job" to="/worthbuy">值得买</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/shoppingcart">购物车</van-tabbar-item>
      <van-tabbar-item
        icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"
        to="/primary"
        >个人</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../../components/Header.vue'
import { getHomeDatas, getCategoryList } from '../../api'
// import {  } from "vant";
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
  CountDown,
  Image,
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
Vue.use(CountDown)
Vue.use(Image)
export default Vue.extend({
  props: {},
  data() {
    return {
      value: '',
      active: 0,
      active1: 2,
      autosize: { maxHeight: 100, minHeight: 50 },
      // homedatas: "",
      //navList
      navList: '',
      time: '',
      // showTime: "",
      //楼层
      bigPromotionModule: '',
      //类目热销榜模块
      categoryHotSellModule: '',
      //限时促销
      flashSaleModule: '',
      //宫格图片(轮播图下方十个宫格)
      kingKongModule: '',
      //新品首发
      newItemList: '',
      //规则描述(七天无理由退款等等)
      policyDescList: '',
      //人气推荐
      popularItemList: '',
      //关注列表,轮播图数据
      focusList: '',
      //新人专享礼模块
      indexActivityModule: '',
      //旅游观光模块
      sceneLightShoppingGuideModule: '',
      //标签列表
      tagList: '',
    }
  },
  computed: {},
  created() {},

  mounted() {
    //  this.showTime=this.showTime1();
    // setInterval(() => {
    //   this.showTime = this.showTime1();
    // }, 1000);
    // console.log(this.getdatas());
    this.getdatas()
  },
  watch: {},
  methods: {
    async getdatas() {
      const result1 = await getCategoryList()
      this.navList = result1.data.categoryList
      console.log('navList', this.navList)
      const result = await getHomeDatas()
      // console.log("1111", result);
      // console.log(this.homedatas)
      this.bigPromotionModule = result.data.homedatas[0].bigPromotionModule
      //热销榜
      this.categoryHotSellModule =
        result.data.homedatas[0].categoryHotSellModule.categoryList
      this.flashSaleModule = result.data.homedatas[0].flashSaleModule
      //时间
      this.time = result.data.homedatas[0].flashSaleModule.nextStartTime
      this.kingKongModule = result.data.homedatas[0].kingKongModule.kingKongList
      this.newItemList = result.data.homedatas[0].newItemList
      this.policyDescList = result.data.homedatas[0].policyDescList
      /* 人气推荐数据为空 */
      this.popularItemList = result.data.homedatas[0].popularItemList
      console.log('popular', this.popularItemList)
      this.focusList = result.data.homedatas[0].focusList
      this.indexActivityModule = result.data.homedatas[0].indexActivityModule
      this.sceneLightShoppingGuideModule =
        result.data.homedatas[0].sceneLightShoppingGuideModule
      this.tagList = result.data.homedatas[0].tagList
      // console.log('11111',this.categoryHotSellModule.slice(2,10))
      console.log(
        '2222',
        this.bigPromotionModule,
        //热销类目榜
        this.categoryHotSellModule,
        // this.flashSaleModule,
        // this.kingKongModule,
        this.newItemList,
        // this.policyDescList,
        // 人气推荐没有数据
        // this.popularItemList,
        // this.focusList,
        //新人专享好礼
        // this.indexActivityModule,
        this.sceneLightShoppingGuideModule,
        this.tagList
      )
      // console.log("kingkongList", this.kingKongModule);
      return result
    },
    showTime1() {
      var nowtime = new Date(), //获取当前时间
        endtime = new Date('2020/8/8') //定义结束时间
      var lefttime = endtime.getTime() - nowtime.getTime(), //距离结束时间的毫秒数
        leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24)), //计算天数
        lefth = Math.floor((lefttime / (1000 * 60 * 60)) % 24), //计算小时数
        leftm = Math.floor((lefttime / (1000 * 60)) % 60), //计算分钟数
        lefts = Math.floor((lefttime / 1000) % 60) //计算秒数
      return leftd + '天' + lefth + ':' + leftm + ':' + lefts //返回倒计时的字符串
    },
    swipeTo(index: number): void {
      console.log(this.kingKongModule[index], typeof this.kingKongModule[index])
      // const kingkong=JSON.parse(this.kingKongModule)
      // console.log('22333444',kingkong)
      var a: any = this.kingKongModule[index]
      // if (a.schemeUrl) {
      window.location.href = a.schemeUrl
      // }
    },
  },
  components: {
    Header,
  },
})
</script>

<style scoped lang="less">
//test
.van-grid.test {
  width: 20000px;
  height: 200px;
  background: chocolate;
  .van-grid-item {
    background: chartreuse;
    // white-space: nowrap;
    // overflow-y: hidden;
    overflow-x: scroll;
    width: 200px;
    height: 200px;
    float: left;
  }
}
.home-wrap {
  // padding-top: 1.3rem;
  Header {
    .left {
      // width: 1.84rem;
      flex: 1;
      height: 0.5333333rem;
      /* line-height: .5333333rem; */
      background-position: center;
      // background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp);
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png);
      background-size: cover;
      display: inline-block;
      margin-right: 0.266667rem;
      // color:red;
    }
    .center {
      display: inline-block;
      flex: 3;
      // width: 663.41px;
      height: 84.04px;
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
        font-size: 0.37333rem;
        color: gray;
        // text-decoration: line-through;
      }
    }
    .right {
      // width: 111.05px;
      flex: 1;
      height: 60.03px;
      text-align: center;
      line-height: 0.54667rem;
      background: white;
      color: red;
      border: solid red 1px;
      margin-left: 20px;
      border-radius: 0.10667rem;
    }
  }
}
//标题统一样式
.title {
  display: flex;
  justify-content: space-between;
  .title1 {
    font-size: 48.026px;
    font-weight: bold;
    margin-right: 30px;
  }
}
//导航栏样式
/deep/ .van-tab {
  font-size: 42.022px;
  padding: 0px 24.0124px;
  // color: #3333;
  z-index: 2;
}
//轮播图样式
/deep/ .my-swipe .van-swipe-item {
  width: 1125.6px;
  height: 555.49px;
  // background-color:red;
  text-align: center;
  background-color: #39a9ed;
}
//规则(七天无理由退货)
.service {
  margin: 0 49.728px;
  display: flex;
  justify-content: space-between;
  // font-size: 12.0064px;
  span {
    font-size: 45px;
    img {
      width: 45px;
      height: 45px;
      // line-height: 45px;
      vertical-align: middle;
      margin-bottom: 10px;
    }
  }
}
/* 三宫格 */
/deep/ .van-grid.kingkong3 {
  display: flex;
  // justify-content: space-between;
  .van-grid-item__content {
    margin: 20px;
    width: 324.16px;
    height: 596.39px;
    span {
      font-size: 40px;
    }
    .price {
      color: red;
    }
    .van-image {
      width: 324.16px;
      height: 324.16px;
    }
    .van-icon__image {
      width: 324.16px;
      height: 324.16px;
    }
    .van-grid-item__text {
      font-size: 36.0192px;
      margin: 15.0076px 0 0;
    }
  }
}
/* 四宫格 */
/deep/ .van-grid.kingkong4 {
  .van-grid-item__content {
    width: 247.63px;
    height: 270.14px;
    .van-image {
      width: 180.9px;
      height: 180.9px;
    }
    .van-icon {
      width: 180.9px;
      height: 180.9px;
    }
    .van-grid-item__text {
      font-size: 36.0192px;
      margin: 15.0076px 0 0;
    }
  }
}
/* 五宫格 */
/deep/ .van-grid.kingkong5 {
  .van-grid-item__content {
    width: 165.09px;
    height: 234.11px;
    margin: 15.0076px 30.0164px 0px;
    .van-icon__image {
      width: 165.09px;
      height: 165.09px;
    }
    .van-grid-item__text {
      font-size: 36.0192px;
      margin: 15.0076px 0 0;
    }
  }
}
//限时购
.time-shop {
  .title .left {
    display: flex;
    justify-content: center;
    align-items: center;
    .van-count-down {
      display: inline-block;
      // margin-top:100px;
      height: 100px;
    }
    .colon {
      // width: 48px;
      height: 100px;
      line-height: 100px;
      display: inline-block;
      margin: 0 4px;
      color: #ee0a24;
    }
    .block {
      display: inline-block;
      height: 50px;
      width: 48px;
      color: #fff;
      line-height: 50px;
      font-size: 36.0192px;
      text-align: center;
      background-color: #ee0a24;
      border-radius: 10px;
      margin-top: 25px;
    }
  }
  /deep/ .van-grid-item {
    .oldPrice {
      color: #ccc;
      text-decoration: line-through;
    }
    .newPrice {
      color: red;
    }
  }
}
//新人专享
.newMember {
  .title {
    // text-align: center;
    display: flex;
    justify-content: space-around;
    .title1 {
      // text-align: center;
      // font-size: 48px;
    }
  }
  .content {
    display: flex;
    .left {
      width: 514.76px;
      height: 651.34px;
      background: papayawhip;
      img {
        width: 387.2px;
        height: 385.7px;
        // vertical-align: middle;
        text-align: center;
      }
      span {
        padding: 45.024px 0 0 45.024px;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      background: slategray;
      height: 651.34px;
      img {
        width: 514.76px;
        height: 322.66px;
        padding: 30.0164px 0 0 45.024px;
      }
    }
  }
}
//类目热销榜
.sale-hot {
  .head {
    width: 100%;
    height: 310px;
    display: flex;
    div {
      width: 510.26px;
      height: 300.15px;
      background: #f9f3e4;
      margin: 0 15.0076px 15.0076px 0;
      // vertical-align: middle;
      // text-align: center;
      // line-height: 300.15px;
      span {
        // display: inline-block;
        position: relative;
        top: -120px;
        font-size: 42.022px;
        // margin:120px 0 0 0;
      }
      img {
        width: 300.15px;
        height: 300.15px;
      }
    }
  }
  .content {
    .van-grid-item__content {
      span {
        font-size: 30px;
      }
    }
  }
}
//广告1
.adver1 {
  width: 1125.6px;
  height: 330.18px;
  // background:chartreuse
}
.adver2 {
  img {
    width: 1125.6px;
    height: 240.13px;
    // background:cornsilk
  }
}
//底部
.footer {
  width: 1125.6px;
  height: 366.11px;
  padding: 81.0432px 30.0164px 42.022px;
  text-align: center;
  background: #333;
  .top {
    height: 93.04px;
    margin: 0 0 54.0288px;
    button {
      width: 258.13px;
      height: 93.04px;
      color: #ffffff;
      font-size: 36.0192px;
      margin: 0 75.0404px 0 0;
      background: rgba(0, 0, 0, 0);
      // opacity: .5;
    }
  }
  .bottom {
    color: #999999;
    font-size: 36.0192px;
  }
}
</style>
