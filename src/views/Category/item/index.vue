<template>
  <div class='wrap-item'
       v-if='itemData'>
    <div class="right">
      <!-- 标题 -->
      <!-- 宫格 -->
      <van-grid :column-num="3"
                class='kingkong3'>
        <van-grid-item  v-for='item in itemData.subCateList'
          :key='item.id' :icon="item.iconUrl"
                       :text="item.frontDesc">
                       <van-image :src='item.wapBannerUrl'/>
                       <p>{{item.name}}</p>
                       </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
/* import { Grid, GridItem } from 'vant';
Vue.use(Grid);
Vue.use(GridItem); */
import { Sidebar, SidebarItem } from "vant";
Vue.use(Sidebar);
Vue.use(SidebarItem);

export default Vue.extend({
  props: ["itemData"],
  data() {
    return {
      activeKey: 0
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
});
</script>

<style scoped lang="less">
.wrap-item {
  // font-size: 1rem;
  display: flex;
  // justify-content: space-between;
  // width: 100%;
  // background: cornsilk;
  .left {
    // font-size: 1rem;
    flex: 21.6;
    width: 2.16rem;
    height: 100%;
    background: red;
  }
  .right {
    flex: 78.4;
    // margin-left: 2.16rem;
    // display: inline-block;
    float: left;
    /deep/ .van-grid.kingkong3 {
      display: flex;
      // justify-content: space-between;
      .van-grid-item__content {
        // margin-right: .45333rem;
        width: 1.92rem;
        height: 2.88rem;
        // vertical-align: top;
        span {
          font-size: 40px;
        }
        .price {
          color: red;
        }
        .van-image {
          width: 1.92rem;
          height: 1.92rem;
        }
        .van-icon__image {
          width: 1.92rem;
          height: 1.92rem;
        }
        .van-icon {
          width: 1.92rem;
          height: 1.92rem;
        }
        .van-grid-item__text {
          font-size: 36.0192px;
          margin: 15.0076px 0 0;
        }
      }
    }
  }
}
</style>
