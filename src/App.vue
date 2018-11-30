<template>
  <div id="app">
    <Tab></Tab>
    <transition name="fadeIn">
    <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    </transition>
    <transition name="fadeIn">
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
  import Tab from "./base/tab";
export default {
  name: 'App',
  components: {Tab},
}
</script>

<style>
  *{
    margin:0;
  }
  ul,li{margin:0;list-style: none}
  a{text-decoration: none}
  input,button{
    -webkit-appearance: none;
  }
  .content{
    position:fixed;
    width: 100%;
    top: 50px;
    bottom:50px;
    overflow: auto;
  }
  .fadeIn-enter{
    opacity: 0;
  }
  .fadeIn-enter-active{
    transition: all 0.3s linear;
  }
  .fadeIn-leave-active{
    transition: all 0.3s linear;
    opacity: 0;
  }

</style>
