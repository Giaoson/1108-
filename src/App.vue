<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div> -->
  <div>
    <Header/>
    <router-view></router-view>
    <Footer />
    <Tabbar />
  </div>

</template>

<script lang="ts">
import Tabbar from './components/Tabbar/index.vue'
import Header from './components/Header.vue'
import { getHomeDatas,getSearch } from "./api";
import Vue from "vue";
// import HelloWorld from './components/HelloWorld.vue';
import Footer from "./components/index.vue";

export default Vue.extend({
  name: "App",
  components: {
    // HelloWorld
    Header,
    Footer,
    Tabbar
  },
  async mounted() {
    const result: any = await getHomeDatas();
    console.log("1111:", result);
    const result3=await getSearch();
    console.log('333',result3);
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
