<template>
    <div>
      <Mheader :back="true">购物车</Mheader>
      <ul class="content">
        <li v-for="list in carList">
          <img :src="list.bookCover" alt="">
          <button>+</button>{{list.bookCount}}
          <button>-</button>
          <p>小计:{{list.bookPrice*list.bookCount}}</p>
          <button>删除</button>
        </li>
        <li>一共{{$store.getters.count}}</li>
      </ul>
    </div>
</template>

<script>
  //辅助函数 语法糖
  import {mapState} from 'vuex';
    import Mheader from '../base/Mheader'
    export default {
        name: "collect",
      components:{Mheader},
      computed:{
        ...mapState(['carList'])
      }
    }
</script>

<style scoped>

</style>
