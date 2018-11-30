<template>
    <div class="header">
      <slot></slot>
      <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>

    </div>
</template>

<script>
    export default {
         props:{
           back:{
             type:Boolean,
             default:false
           },
         },
         methods:{
           goBack(){
             this.$router.go(-1);
           }
         }
    }
</script>

<style scoped lang="less">
  .header{
    background: rgba(20, 145, 46, 0.4);
    height:50px;
    text-align: center;
    line-height: 50px;
    font-weight: 500;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    i{
      position: absolute;
      left: 10px;
      font-size: 20px;
    }
  }


</style>
