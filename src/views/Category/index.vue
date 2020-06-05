<template>
  <div class="wrap-category1">
    <Header>
      <div slot="center" class="center">
        <i class="icon"></i>
        <span class="placeholder">????, ?28156???</span>
      </div>
    </Header>
    <div class="wrap-category">
      <div class="left">
        <van-sidebar v-model="activeKey" @change="onChange" v-if="categoryList">
          <van-sidebar-item
            v-for="item in categoryList"
            :title="item.name"
            :key="item.id"
          ></van-sidebar-item>
          <!-- <van-sidebar-item title='111' /> -->
        </van-sidebar>
      </div>
      <div class="right">
        <!-- 大图 -->
        <img
          src="https://yanxuan.nosdn.127.net/761877bc4e2cf50d7c424a8a7e6378bf.jpg?quality=75&type=webp&imageView&thumbnail=0x196"
          alt=""
          class="bigImg"
        />
        <Item :itemData="itemData" />
        <Item />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Item from './item/index.vue'
import { getCategoryList } from '../../api'
import Header from '../../components/Header.vue'
export default Vue.extend({
  props: {},
  data() {
    return {
      activeKey: 1,
      categoryList: '',
      itemData: '',
      index: 1,
    }
  },
  computed: {},
  created() {},
  mounted() {
    // console.log(Item);
    this.getCategoryList()
    console.log('22222222222', this.categoryList)
  },
  watch: {},
  methods: {
    async getCategoryList() {
      const result: any = await getCategoryList()
      this.categoryList = result.data.categoryList
      this.itemData = this.categoryList[this.activeKey]
      console.log('2222', this.categoryList, this.itemData)
    },
    onChange(i: number) {
      // console.log(i)
      this.itemData = this.categoryList[i]
      console.log(this.itemData)
    },
  },
  components: {
    Item,
    Header,
  },
})
</script>

<style scoped lang="less">
 Header {
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
        color: red;
      }
      .placeholder {
        font-size: 0.37333rem;
        color: gray;
        // text-decoration: line-through;
      }
    }
  }
.wrap-category {
  // margin-top: 0.9333rem;
  padding-top: 1.3rem;
  display: flex;
  .left {
    flex: 21.6;
    position: relative;
    background: #fff;
    /deep/ .van-sidebar {
      position: fixed;
      top: 1.2rem;
      width: 2.16rem;
      .van-sidebar-item {
        padding: 0.3333rem;
        margin-bottom: 0.6rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 0.37333rem;
        // line-height: .37333rem;
        width: 100%;
        height: 0.657783rem;
        .van-sidebar-item__text {
          height: 100%;
          // border-left: red 2px solid;
        }
      }
    }
  }
  .right {
    // margin-top:1.2rem;
    flex: 78.4;
    height: 100%;
    // background: darkgreen;
    // margin: 0.3rem;
    .title {
      font-size: 0.37333rem;
    }
    .bigImg {
      // margin-top: 0.9333rem;
      width: 100%;
      background: cornflowerblue;
      height: 2.56rem;
      margin-bottom: 0.333rem;
    }
  }
}
</style>
