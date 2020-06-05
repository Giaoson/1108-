<template>
  <div class='wrap-header'>
     

    <header class="header">
<slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
      <!-- <span class="left"></span>
      <div class="center">
        <i class="icon"></i>
        <span class="placeholder">搜索商品, 共28156款好物</span>
      </div>
      <button class='right'>登录</button> -->
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
})
</script>
<style scoped lang='less'>
.wrap-header{
  width: 100%;
  position: relative;
.header {
  width: 100%;
  z-index: 3;
  background:#ffff;
  position: fixed;
  overflow: hidden;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  padding: 0.21333rem 0.4rem;
  background-image: url('?quality=75&type=webp&imageView&thumbnail=343x220');
  background-size: 100% 100%;

}
}
</style>
