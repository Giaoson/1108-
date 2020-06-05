<template>
  <div>
    <van-tabbar v-model="active1"
                route
                placeholder>
      <van-tabbar-item icon="wap-home"
                       to='/'>首页</van-tabbar-item>
      <van-tabbar-item icon="bars"
                       to='/category'>分类</van-tabbar-item>
      <van-tabbar-item icon="good-job"
                       to='/worthbuy'>值得买</van-tabbar-item>
      <van-tabbar-item icon="cart-o"
                       to='/shoppingcart'>购物车</van-tabbar-item>
      <van-tabbar-item icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"
                       to='/private'>个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
export default Vue.extend({
  props: {},
  data() {
    return {
      active1: 2
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
/deep/ .van-tabbar {
  width: 100%;
  height: 147.07px;
  .van-tabbar-item {
    width: 108.05px;
    height: 106.53px;
    .van-icon {
      width: 60.03px;
      height: 60.03px;
      font-size: 60px;
      text-align: center;
      line-height: 60.03px;
      .van-icon-bars::before {
        content: "\F016";
        height: 60.03px;
        width: 60.03px;
      }
    }
  }
}
</style>
