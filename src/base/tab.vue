<template>
  <div class="footer">
  <router-link to="/home">
    <i class="iconfont icon-zhuye"></i>
    <span>首页</span></router-link>
  <router-link to="/list">
    <i class="iconfont icon-list"></i>
    <span>列表</span></router-link>
  <router-link to="/add">
    <i class="iconfont icon-icon--"></i>
    <span>添加</span></router-link>
  <router-link to="/collect">
    <i class="iconfont icon-shoucang"></i>
    <span>收藏</span></router-link>
  </div>
</template>

<script>
    export default {
        name: "tab"
    }
</script>
<!--display:flex;
    flex-direction:row/colum;
    justify-content:center;
    align-item:center;
    flex:1-->
<style scoped lang="less">
  .footer{
    position:fixed;
    left:0;
    bottom:0;
    width:100%;
    height:50px;
    display:flex;
    border-top: 1px solid rgba(0,0,0,0.23);
    a{
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      justify-content: center;
      color:darkorange;
    }
    a.router-link-active{
      color:green;
    }
  }

</style>
